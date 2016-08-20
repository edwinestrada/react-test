var jQuery = require('jquery');
var $ = jQuery;
var React = require('react');
var ReactDOM = require('react-dom');

////////////////
// Components //
////////////////
var Header = require('./components/common/header');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Gallery = require('./components/common/gallery');

(function () {
  'use strict';
  ///////////////////
  // App Component //
  ///////////////////
  var App = React.createClass({
    render: function () {
      var elements = [
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/3/12/enhanced/webdr15/anigif_enhanced-20246-1451843224-6_preview.gif'
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/3/12/enhanced/webdr15/anigif_enhanced-20246-1451843224-6_preview.gif'
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/3/12/enhanced/webdr15/anigif_enhanced-20246-1451843224-6_preview.gif'
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/3/12/enhanced/webdr15/anigif_enhanced-20246-1451843224-6_preview.gif'
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/3/12/enhanced/webdr15/anigif_enhanced-20246-1451843224-6_preview.gif'
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/3/12/enhanced/webdr15/anigif_enhanced-20246-1451843224-6_preview.gif'
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/3/12/enhanced/webdr15/anigif_enhanced-20246-1451843224-6_preview.gif'
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/3/12/enhanced/webdr15/anigif_enhanced-20246-1451843224-6_preview.gif'
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/3/12/enhanced/webdr15/anigif_enhanced-20246-1451843224-6_preview.gif'
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/3/12/enhanced/webdr15/anigif_enhanced-20246-1451843224-6_preview.gif'
        },
        {
          src: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/3/12/enhanced/webdr15/anigif_enhanced-20246-1451843224-6_preview.gif'
        }
      ];

      var Child;

      switch (this.props.route) {
        case 'about':
          Child = About;
          break;
        default:
          Child = Home;
      }

      var gridStyle = {
        margin: 5
      };

      return (
        <div>
          <Header />
          <Child />
          <div style={gridStyle}>
            <Gallery elements={elements} />
          </div>
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
