var _ = require('lodash');
var React = require('react');
var SignOut = require('../authentication/SignOut.jsx');
var JobForm = require('./JobForm.jsx');
var CompanyNavbar = require('../CompanyNavbar.jsx')
var ShowAllJobs = require('../ShowAllJobs.jsx')
var JobList = require('../JobList.jsx')
var EditJobForm = require('./EditJobForm.jsx')
// var DatePicker = require('../DatePicker.jsx')
var CompanyView = React.createClass({
  getInitialState: function() {
    return {currentView: "foodForm", selectedJobForEdit: {}}
  },
  changeView: function(view) {
    this.setState({currentView: view});
    
  },
  handleDeleteJob:function(job){
    var updatedJobs = this.props.jobs;  
    updatedJobs = _.without(updatedJobs, job);

    this.props.forceUpdateState({jobs: updatedJobs});

    var updateUrl = this.props.url + "jobs/" + job.id;
    var object= ""
    var request = new XMLHttpRequest();
    request.open("DELETE", updateUrl, true );
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;
    // request.send(JSON.stringify(object))

    this.props.fetchJobs();
  },
  handleChooseJobForEdit: function(job){
    console.log(job)
    this.setState({selectedJobForEdit: job})
  },
  handleUpdateJob:function(job){
    console.log("trying to update", job)
    var updateUrl = this.props.url + "jobs/" + job.id;

    var request = new XMLHttpRequest();
    request.open("PUT", updateUrl, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;
    request.send(JSON.stringify(job))
  },
  render: function() {
    var toDisplay;
    switch(this.state.currentView) {
      case "foodForm":
        toDisplay = <JobForm url={this.props.url}/>
      break;
      case "donations":
        toDisplay = <ShowAllJobs jobs={this.props.jobs} handleDeleteJob={this.handleDeleteJob} changeView={this.changeView} onChooseJobForEdit={this.handleChooseJobForEdit}>Donations</ShowAllJobs>
      break;
      case "editJobView":
        toDisplay = <EditJobForm job={this.state.selectedJobForEdit} onUpdate={this.handleUpdateJob}></EditJobForm>
      break;
      default:
        toDisplay = <div />
    }

    return (
      <div> 
        <CompanyNavbar changeView={this.changeView} url={this.props.url} onSignOut={this.props.onSignOut}></CompanyNavbar>
        {toDisplay}

      </div>
      )
  }
})

module.exports = CompanyView;