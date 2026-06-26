import React, { useState } from "react";
import { sidePanelItems } from "../../config/sidePanel.config";
import SearchPanel from "../../../features/search/components/SearchPanel";
// import WatchlistPanel from "../../../features/watchlist/components/WatchlistPanel";

export default function QuickMenu() {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div>
      <div className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-[70]">
        <div className="flex flex-col gap-2">
          {sidePanelItems.map(({ id, label, icon: Icon }) => {
            return (
              <button
                key={id}
                className="bg-sf-header-bg border-y border-r border-sf-border px-1.5 py-3 rounded-r-md hover:text-sf-accent-blue transition-colors flex flex-col items-center justify-center min-w-[64px] cursor-pointer"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Icon size={18} />
                <span className="text-[9px] font-bold uppercase tracking-wider mt-1">
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      {searchOpen && <SearchPanel setIsOpen={setSearchOpen} />}
    </div>
  );
}
