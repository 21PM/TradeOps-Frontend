import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";

import type { Dispatch, SetStateAction } from "react";
import ContractCard from "./ContractCard";
import { useSearchContracts } from "../hooks/useSearchContracts";
import useDebounceValue from "../../tradeDesk/hooks/useDebounceValue";

type SearchPanelProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function SearchPanel({ setIsOpen }: SearchPanelProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const { debouncedValue: debouncedSearch } = useDebounceValue(searchTerm);

  const { results, loading, error } = useSearchContracts(debouncedSearch);

  useEffect(() => {
    console.log("results", results);
  }, [results]);

  return (
    <div
      className="fixed inset-y-0 left-0 w-96 bg-[#1A1C21] border-r border-sf-border z-[80] shadow-2xl transition-transform flex flex-col"
      id="search-sidebar"
    >
      <div className="p-4 border-b border-sf-border">
        <div className="flex items-center space-x-3">
          <button className="text-sf-text-dim hover:text-white cursor-pointer">
            <IoMdClose onClick={() => setIsOpen(false)} />
          </button>
          <div className="relative flex-1">
            <input
              className="w-full bg-transparent border border-sf-border rounded px-3 py-2 text-sm focus:ring-1 focus:ring-sf-accent-blue outline-none"
              placeholder="Search Assets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
            />
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-sf-text-dim text-sm">
              search
            </span>
          </div>
        </div>
      </div>
      <div className="flex border-b border-sf-border text-xs font-medium text-sf-text-dim">
        <button className="px-4 py-3 text-sf-accent-blue border-b-2 border-sf-accent-blue">
          All
        </button>
        <button className="px-4 py-3 hover:text-white transition-colors">
          F & O
        </button>
        <button className="px-4 py-3 hover:text-white transition-colors">
          Stocks
        </button>
      </div>
      <ContractCard />
      <ContractCard />
      <ContractCard />
      <ContractCard />
      <ContractCard />
    </div>
  );
}

export default SearchPanel;
