var React = require("react");

var FadeThroughChild = module.exports = React.createClass({

  displayName: "FadeThroughChild",

  render: function() {
    return (
      <div style={ this.props.style }>
        { this.props.children }
      </div>
    );
  }

});
