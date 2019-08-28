import React from "react";
var createReactClass = require('create-react-class');

export default createReactClass({
  render: function() {
    return (
      <div className="greeting">
        Hello, {this.props.name}!
      </div>
    );
  },
});