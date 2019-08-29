import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  clickHandle = () => {
    let newColor = this.props.colorComponent()
    this.setState({
      color: newColor
    })
  }
  
  render() {
    console.log("oy")
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.clickHandle}>
      </div>
    )
  }
  
}
