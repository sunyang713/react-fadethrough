var React = require("react");
var FadeThroughComponent = require("./FadeThroughComponent");


var FadeThroughContainer = module.exports = React.createClass({

  displayName: "FadeThroughContainer",

  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    delay: React.PropTypes.number.isRequired,
    style: React.PropTypes.shape({
      content: React.PropTypes.object,
      overlay: React.PropTypes.object
    }),
  },

  getInitialState: function() {
    return { activeIndex: 0 };
  },

  componentDidMount: function() {
    this.interval = setInterval(
      this.next(),
      this.props.delay
    );
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  next: function() {
    return function() {
      this.setState({ activeIndex: this.state.activeIndex + 1 });
      if (this.state.activeIndex === this.props.children.length)
        this.setState({ activeIndex: 0 });
    };
  },

  render: function() {
    const style = {
      width: this.props.width,
      height: this.props.height
    };
    return (
      <div style={ style }>
        <FadeThroughComponent
          activeIndex={ this.state.activeIndex }
          delay={ this.props.delay }
        >
          { this.props.children }
        </FadeThroughComponent>
      </div>
    );
  }

});
