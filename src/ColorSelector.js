import React, { Component } from 'react';

export default class ColorSelector extends Component {
  
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      const clicked = () => {this.props.setColor(str)}
      return <div key={idx} onClick={clicked} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )
  
  render() {
    console.log("PROPS COLOR SELECTOR", this.props.setColor)
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}

// not finished