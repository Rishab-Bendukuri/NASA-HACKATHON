import React, { Component } from 'react'
import Plot from 'react-plotly.js'
export default class PiePlot extends Component {
  
  // useEffect(()=>{
  //   fetch(`http://localhost:4000/cna-api/percentages`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  //   .catch(err=>console.log(err))
  // },[]);

  render() {
    return (
      <div>
        <Plot
            data={[{
                values: [85.7,14.3],
                labels:['chondrites','achondrites'],
                type:'pie'
            }]}
            layout={{width:500,height:500,title:'piechart'}}
        />
      </div>
    )
  }
}