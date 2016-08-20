'use strict';

var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <div className='jumbotron'>
        <h1>Pluralsight Administration</h1>
        <p>
          React, Flux, and React Router combined with Browserify, and Gulp. Build a React and Flux app from scratch using this starter kit.
        </p>
      </div>
    );
  }
});

module.exports = Home;
