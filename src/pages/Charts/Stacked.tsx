import React from "react";
import { ChartHeader, StackedChart } from "../../components";

function Stacked() {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartHeader category="Stacked" title="Revenue Breakdown" />
      <div className="w-full">
        <StackedChart width={undefined} height={undefined} />
      </div>
    </div>
  );
}

export default Stacked;
