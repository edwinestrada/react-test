var jQuery = require('jquery');
var $ = jQuery;
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');

React.render(<Home />, document.getElementById('app'));
