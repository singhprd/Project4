var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/Main.jsx')

window.onload = function() {
  ReactDOM.render(
    <Main url="http://localhost:3000/"></Main>, 
    document.getElementById('app')
  );

};



