var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/Main.jsx')
var Navbar = require('./components/Navbar.jsx')

var url = "http://localhost:3000/";

window.onload = function() {
  ReactDOM.render(
    <Main url={url}></Main>, 
    document.getElementById('app')
  );
};



