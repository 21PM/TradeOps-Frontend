import React from "react";
import PortfolioPage from "../features/portfolio/pages/PortfolioPage";
import TradeDesk from "../features/tradeDesk/pages/TradeDesk";
import SiginPage from "../features/auth/pages/SiginPage";
import SignupPage from "../features/auth/pages/SignupPage";
import { Route, Routes } from "react-router-dom";
function AppRouter() {
  return (
    <Routes>
      <Route index element={<TradeDesk />} />
      <Route path="/signin" element={<SiginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
}

export default AppRouter;
