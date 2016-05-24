var React = require('react');
var SignOut = require('../authentication/SignOut.jsx');
var Navbar = require('../navbar.jsx')
var GoogleMap = require('../GoogleMap');

var CourierView = React.createClass({
  render: function() {
    return (
      <div> 
        <Navbar url={this.props.url} onSignOut={this.props.onSignOut}></Navbar>
        <GoogleMap jobs={this.props.jobs}/>
      </div>
      )
  }
})

module.exports = CourierView;