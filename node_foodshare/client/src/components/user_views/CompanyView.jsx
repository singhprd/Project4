var React = require('react');
var SignOut = require('../authentication/SignOut.jsx');
var SupplyItemForm = require('./SupplyItemForm.jsx');

var CompanyView = React.createClass({
  render: function() {
    return (
      <div> 
        <h1>CompanyView</h1>
        <SupplyItemForm/>
      </div>
      )
  }
})

module.exports = CompanyView;