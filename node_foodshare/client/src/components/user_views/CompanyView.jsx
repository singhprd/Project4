var React = require('react');
var SignOut = require('../authentication/SignOut.jsx');
var JobForm = require('./JobForm.jsx');
var CompanyNavbar = require('../CompanyNavbar.jsx')
var ShowAllJobs = require('../ShowAllJobs.jsx')
// var DatePicker = require('../DatePicker.jsx')

var CompanyView = React.createClass({
  getInitialState: function() {
    return {currentView: "foodForm"}
  },
  changeView: function(e) {
    this.setState({currentView: e.target.value});
  },
  render: function() {
    var toDisplay;
    switch(this.state.currentView) {
      case "foodForm":
        toDisplay = <JobForm url={this.props.url}/>
        break;
      case "donations":
        // toDisplay   = <DatePicker/>
        toDisplay = <ShowAllJobs jobs={this.props.jobs}>Donations</ShowAllJobs>
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