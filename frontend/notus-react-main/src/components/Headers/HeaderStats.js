import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  let x = 31967;
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="Total No. of valid meteoroids"
                  statTitle={x}
                  statArrow="up"
                  statPercent="3.28"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Based on last 30 years"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="Total No. of relict meteoroids"
                  statTitle="69"
                  statArrow="up"
                  statPercent="3.28"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Based on last 30 years"
                  statIconName="fas fa-ban"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="percentage of chondrites"
                  statTitle="72%"
                  statArrow="up"
                  statPercent="3.28"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Based on last 30 years"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
      
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
