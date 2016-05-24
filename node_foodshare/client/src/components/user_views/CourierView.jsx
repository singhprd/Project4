var React = require('react');
var SignOut = require('../authentication/SignOut.jsx');
var Navbar = require('../navbar.jsx')
var GoogleMap = require('../GoogleMap');

var CourierView = React.createClass({

  handleTakeJob:function(job){
    console.log("job to take", job)
    var updateUrl = this.props.url + "jobs/" + job.id;
    job.courier_id = this.props.user.courier_id;
    console.log(job)
    var request = new XMLHttpRequest();
    request.open("PUT", updateUrl, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(job))
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