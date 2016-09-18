import React, { Component } from 'react'
import FadeThroughChild from './FadeThroughChild'

export default class FadeThroughComponent extends Component {

  render() {
    const inactiveStyle = {
      position: 'absolute',
      transition: 'opacity 3s',
      opacity: '0'
    }

    const activeStyle = {
      position: 'absolute',
      transition: 'opacity 3s',
      opacity: '1'
    }

    return (
      <div>
      { this.props.children.map((child, index) => (
        <FadeThroughChild
          key={ 'fade-through-child' + index }
          style={ index === this.props.activeIndex ? activeStyle : inactiveStyle }
        >
          { child }
        </FadeThroughChild>
      )) }
      </div>
    )
  }
}

FadeThroughComponent.defaultProps = {
  activeIndex: 0
}
