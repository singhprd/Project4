var React = require('react');
var SignOut = require('../authentication/SignOut.jsx');
var Navbar = require('../navbar.jsx')
var GoogleMap = require('../GoogleMap');

var CourierView = React.createClass({

  handleTakeJob:function(job){
    console.log(this.props.user);
    var updateUrl = this.props.url + "jobs/" + job.id;
    var object = {accepted: true};
    var request = new XMLHttpRequest();
    request.open("PUT", updateUrl, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;
    request.send(JSON.stringify(object))
  },

  handleCancelJob:function(job){
    var updateUrl = this.props.url + "jobs/" + job.id;  
    var object = {accepted: false};
    var request = new XMLHttpRequest();
    request.open("PUT", updateUrl, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;
    request.send(JSON.stringify(object))
  },

  render: function() {
    return (
      <div> 
        <Navbar url={this.props.url} onSignOut={this.props.onSignOut}></Navbar>
        <GoogleMap jobs={this.props.jobs} onTakeJob={this.handleTakeJob}/>
      </div>
      )
  }
})

module.exports = CourierView;