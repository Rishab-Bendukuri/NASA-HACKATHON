import React, {useState,useEffect} from "react";

// components
import ASidebar from "components/Sidebar/ASidebar";
import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import PiePlot from "components/Charts/PiePlot";

import Aos from 'aos'
import "aos/dist/aos.css"

export default function ADashboard() {

  useEffect(()=>{
    Aos.init({ duration: 2000 });
  },[]);

  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  var yrs = range(860,2016);
  let [first,setFirst]=useState("860")
  let [second,setSecond]=useState("2016")
  function handlefirst(event){
    setFirst(event.target.value)
  }

  function handlesecond(event){
    setSecond(event.target.value)
  }
  return (
    <div className="bg-success p-3">
    <ASidebar />
      <div className="flex flex-wrap">
        <div data-aos="slide-right" className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart yrs={{f: first,s:second}} />
          <div className="d-flex">
            <div className="col col-md-3">
              <label htmlFor="from">From: </label><br/>
              <select name="from" id="from" onChange={handlefirst} >
                <option value="860" defaultValue>860</option>
                {
                  yrs.map((v,i)=>
                    <option key={i} value={v}>{v}</option>
                  )
                }
                <option value="2016">2016</option>
              </select>
            </div>

            <div className="col col-md-3">
              <label htmlFor="to">To: </label><br/>
              <select name="to" id="to" onChange={handlesecond} defaultValue="2016" >
                <option value="860">860</option>
                {
                  yrs.map((v,i)=>
                    <option key={i} value={v}>{v}</option>
                  )
                }
                <option value="2016">2016</option>
              </select>
            </div>
          </div>
        </div>
        <div data-aos="slide-left" className="w-full xl:w-4/12 px-4">
          <CardBarChart yrs={{f: first,s:second}} />
        </div>

        <div data-aos="slide-right" className="w-full xl:w-4/12 px-4 pt-3">
          <PiePlot />
        </div>
      </div>
     
    </div>
  );
}
