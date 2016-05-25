var React = require('react');
var SignOut = require('../authentication/SignOut.jsx');
var CourierNavbar = require('../couriernavbar.jsx')
var GoogleMap = require('../GoogleMap');
var ShowAllJobs = require('../ShowAllJobs.jsx')
var JobList = require('../JobList.jsx')

var CourierView = React.createClass({
   getInitialState: function() {
    return {currentView: "mapview"}
  },
  changeView: function(view) {
    this.setState({currentView: view});
  },
  handleTakeJob:function(job){
    var updateUrl = this.props.url + "jobs/" + job.id;
    var object = {accepted: true};
    var request = new XMLHttpRequest();
    request.open("PUT", updateUrl, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;
    request.send(JSON.stringify(object));

    this.props.fetchJobs();
  },

  handleCancelJob:function(job){
    var updateUrl = this.props.url + "jobs/" + job.id;  
    var object = {accepted: false};
    var request = new XMLHttpRequest();
    request.open("PUT", updateUrl, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;
    request.send(JSON.stringify(object))

    this.props.fetchJobs();
  },

  handleCompleteJob:  function(job){
    // console.log("trying to send complete job to db")
    var updateUrl = this.props.url + "jobs/" + job.id;  
    var object = {completed: true};
    var request = new XMLHttpRequest();
    request.open("PUT", updateUrl, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;
    request.send(JSON.stringify(object))

    this.props.fetchJobs();
  },

  render: function() {
    var toDisplay
    switch(this.state.currentView){
      case "mapview":
        toDisplay = <GoogleMap jobs={this.props.jobs} onTakeJob={this.handleTakeJob} onCancelJob={this.handleCancelJob} onCompleteJob={this.handleCompleteJob}/>
      break;
      case "showalljobs":
        toDisplay = <JobList jobs={this.props.jobs} onTakeJob={this.handleTakeJob} onCancelJob={this.handleCancelJob} onCompleteJob={this.handleCompleteJob} >Jobs</JobList>
      break;
      default:
        console.log("default")
    }
    
    return (
      <div> 
        <CourierNavbar changeView= {this.changeView} url={this.props.url} onSignOut={this.props.onSignOut}></CourierNavbar>
        {toDisplay}
      </div>
      )
  }
})


module.exports=CourierView;

