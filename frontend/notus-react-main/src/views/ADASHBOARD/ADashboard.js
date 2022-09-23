import React, {useState} from "react";

// components
import ASidebar from "components/Sidebar/ASidebar";
import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";


export default function ADashboard() {

  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  var yrs = range(860,2016);
  let [first,setFirst]=useState("")
  let [second,setSecond]=useState("")
  function handlefirst(event){
    setFirst(event.target.value)
  }

  function handlesecond(event){
    setSecond(event.target.value)
  }
  return (
    <>
    <ASidebar />
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />

          <div className="d-flex">
            <div className="col col-md-3">
              <label htmlFor="from">From: </label><br/>
              <select name="from" id="from" onChange={handlefirst} >
                {
                  yrs.map((v)=>
                    <option value={v}>{v}</option>
                  )
                }
              </select>
            </div>

            <div className="col col-md-3">
              <label htmlFor="to">To: </label><br/>
              <select name="to" id="to" onChange={handlesecond} >
                {
                  yrs.map((v)=>
                    <option value={v}>{v}</option>
                  )
                }
              </select>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
     
    </>
  );
}
