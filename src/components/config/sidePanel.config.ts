import { MdOutlineStarRate } from "react-icons/md";
import { LuChartCandlestick } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import type { IconType } from "react-icons";

interface SidePanelItem {
  id: string;
  label: string;
  icon: IconType;
  className?: string;
}

export const sidePanelItems: SidePanelItem[] = [
  {
    id: "search",
    label: "Search",
    icon: IoMdSearch,
  },
  {
    id: "watchlist",
    label: "Watchlist",
    icon: MdOutlineStarRate,
  },
  {
    id: "option-chain",
    label: "Option Chain",
    icon: LuChartCandlestick,
  },
];
