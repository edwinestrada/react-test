'use strict';

var React = require('react');

var logoStyle = {
  'max-height': 40
};

var Header = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-default">
        <a href="/" className="navbar-brand">
          <img style={logoStyle} src="images/logo.png" />
        </a>
        <ul className="nav navbar-nav">
          <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="/#about">About</a></li>
        </ul>
      </nav>
    );
  }
});

module.exports = Header;
