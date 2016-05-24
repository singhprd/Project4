var React = require('react');
var SignOut = require('../authentication/SignOut.jsx');
var SupplyItemForm = require('./SupplyItemForm.jsx');
var Navbar = require('../navbar.jsx')

var CompanyView = React.createClass({
  render: function() {
    return (
      <div> 
        <h1>CompanyView</h1>
        <Navbar url={this.props.url} onSignOut={this.props.onSignOut}></Navbar>
        <SupplyItemForm/>
      </div>
      )
  }
})

module.exports = CompanyView;