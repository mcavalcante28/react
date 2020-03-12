import React, {Component} from 'react'
import Umidade from '../../umidade/index'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'


export default class SimpleLineChart extends Component {
  
  render () {
    return (
      <LineChart
        width={600}
        height={300}
        data={this.data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
        <Line
          type='monotone'
          dataKey='pv'
          stroke='#8884d8'
          activeDot={{r: 8}}
          />
        <CartesianGrid strokeDasharray='3 3'/>
        <Tooltip/>
        <YAxis/>
        <XAxis dataKey='name'/>
        <Legend />
      </LineChart>
    );
  }
}