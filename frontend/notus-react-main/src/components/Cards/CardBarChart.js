import React,{useEffect,useState} from "react";
import Chart from "chart.js";

export default function CardBarChart(props) {

  let [labels,setLabels]=useState([])
  let [count,setCount]=useState([])

  useEffect(() => {
    labels=[]
    count=[]
    fetch(`http://localhost:4000/noc-api/number/${props.yrs.f}-${props.yrs.s}`)
    .then(response => response.json())
    .then(data => {
      for(var i=0;i<data.length;i++){
        labels.push(Object.keys(data[i])[0])
        count.push(+Object.values(data[i])[0])
      }
      setLabels([...labels])
      setCount([...count])
    })
    .catch(err=>console.log(err))
  },[props])

  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Count",
            backgroundColor: "#ed64a6",
            borderColor: "#ed64a6",
            data: count,
            fill: false,
            barThickness: 8,
          }
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, [count]);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Year wise count
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                Bar plot
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
