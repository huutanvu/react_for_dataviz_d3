import React from 'react';

export default function D3blackbox(d3render) {
  return class Blackbox extends React.Component {

  anchor = React.createRef();

  componentDidMount() {
    d3render.call(this);
  }
  

  componentDidUpdate() {
    d3render.call(this);
  }


  render() {
    const { y } = this.props;
    return <g transform={`translate(10, ${y})`} ref={this.anchor} />;
  }
}
}