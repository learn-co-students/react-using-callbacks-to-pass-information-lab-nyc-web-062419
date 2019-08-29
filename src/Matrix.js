import React, { Component } from "react"
import chromeBoi from "./data.js"
import Cell from "./Cell.js"
import ColorSelector from "./ColorSelector.js"

export default class Matrix extends Component {
  constructor() {
    super()
    this.state = { selectedColor: "#FFF" }
  }

  genRow = vals =>
    vals.map((val, idx) => (
      <Cell
        key={idx}
        color={val}
        getCurrentlySelectedColor={this.getCurrentlySelectedColor}
      />
    ))

  setsSelectedColor = hexColor => {
    console.log(this.state)
    this.setState({ selectedColor: hexColor })
  }

  getCurrentlySelectedColor = () => this.state.selectedColor

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ))

  render() {
    return (
      <div id="app">
        debugger
        <ColorSelector setsSelectedColor={this.setsSelectedColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: chromeBoi
}
