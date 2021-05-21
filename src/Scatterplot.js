import React, {Component} from 'react';
import * as d3 from 'd3';
import Axis from './Axis';

export default class Scatterplot extends Component {
  xScale = d3.scaleLinear().domain([0, 1]).range([0, this.props.width]);
  yScale = d3.scaleLinear().domain([0, 1]).range([0, this.props.height]);
  render () {
    const {x, y, data, height } = this.props;
    return <g transform={`translate(${x}, ${y})`} >
        {data.map(([cx, cy]) => <circle cx={this.xScale(cx)} cy={this.yScale(cy)} r="3"/>)}
        <Axis x={0} y={0} type="Left" scale={this.yScale} label="Y" />
        <Axis x={0} y={height} type="Bottom" scale={this.xScale} label="X" />
      </g>
  }
}