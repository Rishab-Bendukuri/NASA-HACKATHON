import React from 'react'
import Chart from "chart.js";

function Ltypechonrite() {

  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [1,2,3,4],
        datasets: [
          {
            label: "Count",
            backgroundColor: "black",
            borderColor: "#ed64a6",
            data: [1,2,3,4],
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
  }, []);

  return (
    <div className='h100 bgc d-flex flex-column p-5'>
      <div className='d-flex flex-row'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZVcVotbfR0oFYfTXRWBN4UAtPBPvYa6uOsg&usqp=CAU" className="customcrd w-25" alt="..."/>
        <div className='d-flex align-items-center'>
            <h2 className='text-white ps-3'>The L type ordinary chondrites are the second most common group of meteorites, accounting for approximately 35% of all those catalogued, and 40% of the ordinary chondrites.[1] The ordinary chondrites are thought to have originated from three parent asteroids, with the fragments making up the H chondrite, L chondrite and LL chondrite groups respectively.</h2>
        </div>
      </div>
        <div className="p-4 d-flex flex-auto bg-light">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
    </div>
  )
}

export default Ltypechonrite