import React from "react";
import { FiPlusCircle } from "react-icons/fi";

function ContractCard() {
  return (
    <div className="px-4 py-3 border-b border-sf-border/30 cursor-pointer group">
      <div className="flex justify-between items-center gap-2">
        <div>
          <div className="text-xs font-bold text-indigo-300">USDC-SEP2026</div>
          <div className="text-[10px] text-sf-text-dim">
            Maturity Sep 26, 2026
          </div>
        </div>
        <button className="bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded text-xs font-bold flex items-center transition-all duration-200 hover:bg-emerald-600/40 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95 opacity-0 group-hover:opacity-100">
          Buy
        </button>
        <button className="bg-rose-600/20 text-rose-400 border border-rose-500/30 px-3 py-1 rounded text-xs font-bold flex items-center transition-all duration-200 hover:bg-rose-600/40 hover:border-rose-400 hover:shadow-lg hover:shadow-rose-500/20 active:scale-95 opacity-0 group-hover:opacity-100">
          Sell
        </button>
        <button className="bg-sky-600/20 text-sky-400 border border-sky-500/30 px-3 py-1 rounded text-xs font-bold flex items-center justify-center transition-all duration-200 hover:bg-sky-600/40 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-500/20 active:scale-95 opacity-0 group-hover:opacity-100">
          <FiPlusCircle size={16} />
        </button>
      </div>
    </div>
  );
}

export default ContractCard;
