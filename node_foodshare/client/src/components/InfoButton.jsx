var React = require('react');
var JobList = require('./JobList');

var InfoButton = React.createClass({

handleCloseClick:function(){
  return this.props.onCloseClick();
},


displayJobDetails: function(jobs){  
  if(jobs.length > 1){
    this.displayMultipleJobs(jobs)
  } else {
    this.displayOneJob(jobs)
  }
},





  // {this.displayJobDetails(this.props.job)}

render:function(){
  var clickInfoWindow = function(){
      console.log(4+2);
  };

  return (
          <div id = "my-info-window">
          <JobList onTakeJob={this.props.onTakeJob} onCancelJob={this.props.onCancelJob} onCompleteJob={this.props.onCompleteJob} jobs = {this.props.job}/>
          <button onClick = {this.handleCloseClick}>Close</button>
          </div>  
  )
}

})


module.exports = InfoButton;