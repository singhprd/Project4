var React = require('react');
var SignOut = require('../authentication/SignOut.jsx');
var JobForm = require('./JobForm.jsx');
var CompanyNavbar = require('../CompanyNavbar.jsx')
var ShowAllJobs = require('../ShowAllJobs.jsx')
var JobList = require('../JobList.jsx')
// var DatePicker = require('../DatePicker.jsx')

var CompanyView = React.createClass({
  getInitialState: function() {
    return {currentView: "foodForm"}
  },
  changeView: function(view) {
    this.setState({currentView: view});
  },


  handleDeleteJob:function(job){
    var updateUrl = this.props.url + "jobs/" + job.id;
    var object= ""
    var request = new XMLHttpRequest();
    request.open("DELETE", updateUrl, true );
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;
    request.send(JSON.stringify(object))
  },






  render: function() {
    var toDisplay;
    switch(this.state.currentView) {
      case "foodForm":
        toDisplay = <JobForm url={this.props.url}/>
      break;
      case "donations":
        toDisplay = <ShowAllJobs jobs={this.props.jobs} onDeleteJob={this.handleDeleteJob}>Donations</ShowAllJobs>
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