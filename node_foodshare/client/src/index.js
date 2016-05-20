var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/Main.jsx')

window.onload = function() {
  console.log('node server has served this js file');
  ReactDOM.render(
    <Main></Main>, 
    document.getElementById('app')
  );
};