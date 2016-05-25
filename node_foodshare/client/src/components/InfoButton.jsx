var React = require('react');
var JobList = require('./JobList');
var Address = require('./Address');

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

captureJobCompany: function(jobs){
  var company = jobs[0].company
  if(jobs.length == 1){
    return company
  } else {
    for( var i = 1; i < jobs.length; i++){
     if (company.name == jobs[i].company.name){
        console.log(company)
        return company
      }
       else {
        return false
      }
    }
  }
},

selectJobs: function(){
  var jobs = [];
  for (var index of this.props.jobIndices) {
    jobs.push(this.props.jobs[index]);
  }
  return jobs;
},

  // {this.displayJobDetails(this.props.job)}

render:function(){
  // var clickInfoWindow = function(){
  //     console.log(4+2);
  // };

  var selectedJobs = this.selectJobs();

  return (
          <div id = "my-info-window">
          <button onClick = {this.handleCloseClick}>Close</button>
          <Address company={this.captureJobCompany(selectedJobs)}/>
          <JobList onTakeJob={this.props.onTakeJob} onCancelJob={this.props.onCancelJob} onCompleteJob={this.props.onCompleteJob} company= {this.captureJobCompany(selectedJobs)} jobs = {selectedJobs}/>
        
          
          </div>  
  )
}

})


module.exports = InfoButton;