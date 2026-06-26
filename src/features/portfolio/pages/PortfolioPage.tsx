import React from "react";
import { getInstrumentData } from "../../search/apis/searchApis.js";
import { createDbAndStoreContracts } from "../../../helpers/indexDb/db.js";
function PortfolioPage() {
  let instrumentMap = [];
  async function getData() {
    console.log("loggged");
    const ans = await getInstrumentData();
    console.log("ans", Object.keys(ans.data.instrumentMap).length);
    createDbAndStoreContracts(ans.data.instrumentMap);
  }

  return <div onClick={getData}>PortfolioPage</div>;
}

export default PortfolioPage;
