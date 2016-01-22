var React = require("react");
var FadeThroughChild = require("./FadeThroughChild");

var FadeThroughComponent = module.exports = React.createClass({

  displayName: "FadeThroughComponent",

  getDefaultProps: function() {
    return {
      activeIndex: 0,
    };
  },

  render: function() {
    const inactiveStyle = {
      position: "absolute",
      transition: "opacity 3s",
      opacity: "0"
    };

    const activeStyle = {
      position: "absolute",
      transition: "opacity 3s",
      opacity: "1"
    };

    return (
      <div>
      { this.props.children.map((child, index) => (
        <FadeThroughChild
          key={ "fade-through-child" + index }
          style={ index === this.props.activeIndex ? activeStyle : inactiveStyle }
        >
          { child }
        </FadeThroughChild>
      )) }
      </div>
    );
  }

});
