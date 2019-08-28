import React, { Component } from "react"
import chromeBoi from "./data.js"
import Cell from "./Cell.js"
import ColorSelector from "./ColorSelector.js"

export default class Matrix extends Component {
  state = { currentColor: "#000" }

  changeColor = color => {
    this.setState({ currentColor: color })
    console.log("Changed Color to " + color)
  }

  cellClicked = cell => {
    cell.target.style.backgroundColor = this.state.currentColor
  }

  genRow = vals =>
    vals.map((val, idx) => (
      <Cell key={idx} color={val} whenClicked={this.cellClicked} />
    ))

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ))

  render() {
    return (
      <div id="app">
        <ColorSelector colorClicked={this.changeColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: chromeBoi
}
