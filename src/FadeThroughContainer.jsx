import React from 'react'
import FadeThroughComponent from './FadeThroughComponent.jsx'

export default class FadeThroughContainer extends React.Component {

  static propTypes = {
    width: React.PropTypes.string.isRequired,
    height: React.PropTypes.string.isRequired,
    delay: React.PropTypes.number.isRequired
  };

  state = {
    activeIndex: 0
  };

  componentDidMount() {
    this.interval = setInterval(
      this.next(),
      this.props.delay
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  next() {
    return () => {
      this.setState({ activeIndex: this.state.activeIndex + 1 })
      if (this.state.activeIndex === this.props.children.length)
        this.setState({ activeIndex: 0 })
    }
  }

  render() {
    const style = {
      width: this.props.width,
      height: this.props.height
    }
    return (
      <div style={ style }>
        <FadeThroughComponent
          activeIndex={ this.state.activeIndex }
          delay={ this.props.delay }
        >
          { this.props.children }
        </FadeThroughComponent>
      </div>
    )
  }
}
