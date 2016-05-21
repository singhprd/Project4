var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/Main.jsx')
var SupplyItemForm = require('./components/SupplyItemForm.jsx')

window.onload = function() {
  console.log('node server has served this js file');
  // ReactDOM.render(
  //   <Main url="http://localhost:3000/"></Main>, 
  //   document.getElementById('app')
  // );

  
  // Quick render of form too work on layout
  ReactDOM.render(
    <SupplyItemForm/>, 
    document.getElementById('app')
  );

};



