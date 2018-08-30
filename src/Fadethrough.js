import React, { Component } from 'react'

export default class Fadethrough extends Component {

  constructor(props) {
    super(props)

    const activeIndex = 0
    const interval = this.props.interval || 3000

    this.state = {
      activeIndex,
      interval
    }

    this.next = this.next.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval(
      this.next,
      this.state.interval
    )
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  next() {
    const i = (this.state.activeIndex + 1) % this.props.children.length
    this.setState(prevState => ({ activeIndex: i }))
  }

  render() {

    const containerStyle = {
      width: this.props.width || '100%',
      height: this.props.height || '100%',
      position: 'relative',
      overflow: 'hidden',
    }

    const inactiveStyle = {
      position: 'absolute',
      transition: 'opacity 2s',
      opacity: '0',
    }

    const activeStyle = {
      position: 'absolute',
      transition: 'opacity 2s',
      width: '100%',
      height: '100%'
    }

    return (
      <div style={ containerStyle }>
        { this.props.children.map((child, index) => (
          <div
            key={ 'fadethrough-item' + index }
            style={ index === this.state.activeIndex ? activeStyle : inactiveStyle }
          >
            { child }
          </div>
        )) }
      </div>
    )
  }
}
