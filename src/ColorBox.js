import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    let opacity = this.props.opacity;
    return (opacity >= 0.2) ? (<div className="color-box" style={{opacity}}>
          <ColorBox opacity={opacity - 0.1} />
        </div>) : null
  }
}

