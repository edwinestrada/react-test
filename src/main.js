var jQuery = require('jquery');
var $ = jQuery;
var React = require('react');
var ReactDOM = require('react-dom');

////////////////
// Components //
////////////////
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

(function () {
  'use strict';
  ///////////////////
  // App Component //
  ///////////////////
  var App = React.createClass({
    render: function () {
      var Child;

      switch (this.props.route) {
        case 'about':
          Child = About;
          break;
        default:
          Child = Home;
      }

      return (
        <div>
          <Header />
          <Child />
        </div>
      );
    }
  });

  function render() {
    var route = window.location.hash.substr(1);
    ReactDOM.render(<App route={route} />, document.getElementById('app'));
  }

  window.addEventListener('hashchange', render);
  render();
})();
