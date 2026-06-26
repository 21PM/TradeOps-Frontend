import { useEffect, useState, useCallback } from "react";
import {
  newSearchContract,
  searchContracts,
} from "../../../helpers/indexDb/db.ts";

export type Contract = {
  id: string;
  symbol: string;
  optionType: string;
  strikePrice: number;
  expiryDate: string;
  [key: string]: any;
};

export const useSearchContracts = (searchTerm: string) => {
  const [results, setResults] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const performSearch = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await newSearchContract(searchTerm);
        console.log("data", data);
        setResults(data as Contract[]);
      } catch (err) {
        setError("Failed to search contracts");
        console.error(err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [searchTerm]);

  return { results, loading, error };
};
