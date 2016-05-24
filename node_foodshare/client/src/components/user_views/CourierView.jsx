var React = require('react');
var SignOut = require('../authentication/SignOut.jsx');
var CourierNavbar = require('../couriernavbar.jsx')
var GoogleMap = require('../GoogleMap');
var ShowAllJobs = require('../ShowAllJobs.jsx')

var CourierView = React.createClass({
   getInitialState: function() {
    return {currentView: "mapview"}
  },
    changeView: function(e) {
    this.setState({currentView: e.target.value});
  },

  render: function() {
    var toDisplay
    switch(this.state.currentView){
      case "mapview":
        toDisplay =<GoogleMap jobs={this.props.jobs}/>
      break;
      case "showalljobs":
        toDisplay = <ShowAllJobs jobs={this.props.jobs}>Jobs</ShowAllJobs>
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

