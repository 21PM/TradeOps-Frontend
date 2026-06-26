import React from "react";
import type { Dispatch, SetStateAction } from "react";
type SearchPanelProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function WatchlistPanel(setIsOpen: SearchPanelProps) {
  return (
    <div
      className="fixed inset-y-0 left-0 w-96 bg-[#1A1C21] border-r border-sf-border z-[85] shadow-2xl transition-transform flex flex-col"
      id="watchlist-sidebar"
    >
      <div className="p-4 border-b border-sf-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-sf-accent-blue">
              star
            </span>
            <span className="text-sm font-bold uppercase tracking-wider">
              My Watchlists
            </span>
          </div>
          <button
            className="text-sf-text-dim hover:text-white"
            onClick={() => setIsOpen.setIsOpen(false)}
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>
        <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar">
          <button className="px-3 py-1.5 text-xs font-semibold bg-sf-accent-blue/20 text-sf-accent-blue rounded-md border border-sf-accent-blue/30 whitespace-nowrap">
            Favorites
          </button>
          <button className="px-3 py-1.5 text-xs font-semibold hover:bg-white/5 text-sf-text-dim hover:text-white rounded-md transition-colors whitespace-nowrap">
            Institutional
          </button>
          <button className="px-3 py-1.5 text-xs font-semibold hover:bg-white/5 text-sf-text-dim hover:text-white rounded-md transition-colors whitespace-nowrap">
            Stablecoins
          </button>
          <button className="px-2 py-1.5 text-sf-text-dim hover:text-white">
            <span className="material-symbols-outlined text-sm">add</span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto bg-[#1C1F26]">
        <div className="group relative px-4 py-3 hover:bg-white/5 border-b border-sf-border/30 cursor-pointer transition-colors">
          <div className="flex items-center justify-between group-hover:opacity-0 transition-opacity">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center text-xs font-bold text-blue-400">
                ¥
              </div>
              <div>
                <div className="text-xs font-bold text-white">JPYC-JUN2026</div>
                <div className="text-[9px] text-sf-text-dim uppercase">
                  Maturity 06/2026
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-mono-data">100.00</div>
              <div className="text-[9px] text-emerald-400">0.00%</div>
            </div>
          </div>
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center space-x-2 px-4 bg-[#1C1F26]">
            <button className="flex-1 py-2 bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-white text-[10px] font-bold rounded border border-emerald-500/30 transition-all">
              BUY
            </button>
            <button className="flex-1 py-2 bg-rose-500/20 hover:bg-rose-500 text-rose-400 hover:text-white text-[10px] font-bold rounded border border-rose-500/30 transition-all">
              SELL
            </button>
            <button className="p-2 bg-sf-accent-blue/20 text-sf-accent-blue rounded border border-sf-accent-blue/30 hover:bg-sf-accent-blue transition-colors">
              <span className="material-symbols-outlined text-sm">
                remove_circle_outline
              </span>
            </button>
          </div>
        </div>
        <div className="p-6 text-center">
          <button
            className="text-[11px] text-sf-text-dim hover:text-sf-accent-blue flex items-center justify-center w-full space-x-2 py-3 border border-dashed border-sf-border rounded-lg"
            // onclick="
            //   document
            //     .getElementById('watchlist-sidebar')
            //     .classList.add('-translate-x-full');
            //   document
            //     .getElementById('search-sidebar')
            //     .classList.remove('-translate-x-full');
            // "
          >
            <span className="material-symbols-outlined text-sm">add</span>
            <span>Add Assets from Search</span>
          </button>
        </div>
      </div>
      <div className="p-4 border-t border-sf-border bg-[#1A1C21]">
        <div className="flex items-center justify-between text-[10px] text-sf-text-dim uppercase font-bold tracking-widest mb-3">
          Manage Lists
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 py-2 bg-sf-border/40 hover:bg-sf-border/60 rounded text-[10px] font-bold transition-colors">
            Rename
          </button>
          <button className="flex-1 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded text-[10px] font-bold transition-colors">
            Delete List
          </button>
        </div>
      </div>
    </div>
  );
}

export default WatchlistPanel;
