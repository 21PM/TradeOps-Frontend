import type { Contract } from "../../features/search/hooks/useSearchContracts";

export const createDbAndStoreContracts = (instrumentArray: []) => {
  const request = indexedDB.open("contracts");

  const createContractsStore = (db: IDBDatabase) => {
    if (!db.objectStoreNames.contains("contracts")) {
      const store = db.createObjectStore("contracts", {
        keyPath: "id",
      });
      store.createIndex("symbol", "symbol");
      store.createIndex("optionType", "optionType");
      store.createIndex("strikePrice", "strikePrice");
      store.createIndex("expiryDate", "expiryDate");
    }
  };

  request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
    const db = (event.target as IDBOpenDBRequest).result;
    console.log("db upgrade", db);
    createContractsStore(db);
  };

  request.onsuccess = (event) => {
    const db = (event.target as IDBOpenDBRequest).result;

    if (!db.objectStoreNames.contains("contracts")) {
      console.log("inside");

      db.close();
      const retryRequest = indexedDB.open("contracts", db.version + 1);
      retryRequest.onupgradeneeded = (retryEvent: IDBVersionChangeEvent) => {
        const retryDb = (retryEvent.target as IDBOpenDBRequest).result;
        console.log("db upgrade retry", retryDb);
        createContractsStore(retryDb);
      };
      retryRequest.onsuccess = (retryEvent) => {
        const retryDb = (retryEvent.target as IDBOpenDBRequest).result;
        console.log("db connected after retry");
        const transaction = retryDb.transaction("contracts", "readwrite");
        const store = transaction.objectStore("contracts");
        console.log("store", store);
      };
      retryRequest.onerror = (retryEvent) => {
        console.error(
          "Retry open failed",
          (retryEvent.target as IDBOpenDBRequest).error,
        );
      };
      return;
    }

    console.log("outside");

    console.log("db Connected");
    const transaction = db.transaction("contracts", "readwrite");
    const store = transaction.objectStore("contracts");
    console.log("instrumentArray", instrumentArray);
    Object.values(instrumentArray).map((data) => {
      store.put(data);
    });
  };

  request.onerror = (event) => {
    console.error(
      "IndexedDB open failed",
      (event.target as IDBOpenDBRequest).error,
    );
  };
};
let dbInstance: IDBDatabase | null = null;

export const getContractsDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (dbInstance) {
      resolve(dbInstance);
      return;
    }

    const request = indexedDB.open("contracts");

    request.onsuccess = (event) => {
      dbInstance = (event.target as IDBOpenDBRequest).result;
      resolve(dbInstance);
    };

    request.onerror = () => {
      reject("Failed to open IndexedDB");
    };

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains("contracts")) {
        const store = db.createObjectStore("contracts", { keyPath: "id" });
        store.createIndex("symbol", "symbol");
        store.createIndex("optionType", "optionType");
        store.createIndex("strikePrice", "strikePrice");
        store.createIndex("expiryDate", "expiryDate");
      }
    };
  });
};

/**
 * Searches for contracts in IndexedDB by symbol with prefix matching.
 * Uses efficient range queries for fast lookups.
 * @param searchTerm - The symbol prefix to search for (e.g., "BAN")
 * @returns Promise resolving to an array of matching contract objects
 */
export const searchContracts = async (searchTerm: string): Promise<any[]> => {
  // Return empty array if search term is empty or only whitespace
  if (!searchTerm.trim()) {
    return [];
  }

  // Open database and create read-only transaction
  const db = await getContractsDB();
  const transaction = db.transaction("contracts", "readonly");
  const store = transaction.objectStore("contracts");

  // Access the symbol index for efficient prefix-based searching
  const symbolIndex = store.index("symbol");

  return new Promise((resolve, reject) => {
    let results: any[] = [];

    // Normalize search term to uppercase for case-insensitive matching
    const searchUpper = searchTerm.toUpperCase();
    console.log("searchUpper", searchUpper);
    // Create a range for prefix matching
    // Example: "BAN" → range from "BAN" to "BAO" (next letter after N)
    // This efficiently finds all symbols starting with the search term
    const nextLetter = String.fromCharCode(
      searchUpper.charCodeAt(searchUpper.length - 1) + 1,
    );
    const upperBound = searchUpper.slice(0, -1) + nextLetter;
    console.log("upperBound", upperBound);
    console.log("nextLetter", nextLetter);
    // Define range: include start (searchUpper), exclude end (upperBound)
    // This gives us all values where symbol >= "BAN" and symbol < "BAO"
    const range = IDBKeyRange.bound(
      searchUpper,
      upperBound,
      true, // includeStart: true
      true, // includeEnd: false
    );
    console.log("range", range);

    // Open cursor to iterate through matching records
    const request = symbolIndex.openCursor(range);

    // Handle successful cursor operations
    request.onsuccess = (event) => {
      const cursor = (event.target as IDBRequest).result;
      console.log("cursor", cursor);
      symbolIndex.getAll(searchUpper).onsuccess = (getEvent) => {
        const exactMatch = (getEvent.target as IDBRequest).result;
        console.log("exactMatch", exactMatch);
        if (exactMatch.length > 0) {
          results = [];
          results.push(...exactMatch);
          resolve(results);
        }
      };

      if (cursor) {
        // Add current matching record to results
        results.push(cursor.value);
        // Move to next matching record
        cursor.continue();
      } else {
        // Cursor exhausted - all matching records retrieved
        resolve(results);
      }
    };

    // Handle query errors
    request.onerror = () => {
      reject("Search failed");
    };
  });
};

export const newSearchContract = async (searchTerm: string): Promise<any[]> => {
  if (searchTerm.trim() === "") {
    return [];
  }
  console.log({ searchTerm });

  return new Promise((resolve, reject) => {
    try {
      const request = indexedDB.open("contracts", 2); // Step 1 open index Db look for contracts Db;
      request.onsuccess = (event) => {
        const results: Contract[] = [];
        const db = (event.target as IDBOpenDBRequest).result; // get the db
        const range = IDBKeyRange.bound(
          searchTerm.toUpperCase(),
          `${searchTerm.toUpperCase()}\uffff`,
        );
        const transaction = db.transaction("contracts", "readonly");
        const store = transaction.objectStore("contracts");
        const symbolIndex = store.index("symbol");

        symbolIndex.openCursor(range).onsuccess = (event) => {
          const cursor = (event.target as IDBRequest).result;
          console.log({ cursor });
          if (cursor) {
            console.log("cursor.value", cursor.value);
            results.push(cursor.value);
            cursor.continue();
          } else {
            console.log("Entries all displayed.");
            resolve(results);
          }
        };
      };
    } catch (error) {
      reject(["error"]);
    }
  });
};
