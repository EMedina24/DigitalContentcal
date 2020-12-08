
import React, { Component } from 'react';
import '../src/App.css'
import img from './Ironman-logo.png'

class Logo extends Component {
  render() {
    return (
        <div className="logo-main">
        <img src={require("./Ironman-logo.png")} alt=""/>
        <h4>Digital Team Content calendar</h4>
      </div>
    )
  }
}

export default Logo;


















