import React, { Component } from 'react'
import Plot from 'react-plotly.js'
export default class PiePlot extends Component {
  
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