var React = require('react');

var Address = require('./Address');

var JobList = React.createClass({

  getInitialState: function(){
    return {job: null}
  },

  findJob: function(jobs, index){
    var job = jobs[index];
    return job;
  },

  takeJob: function(e){
    // console.log(e.target.value)
    // e.preventDefault;
    var job = this.findJob(this.props.jobs, e.target.value);
   return this.props.onTakeJob(job);

    
    // this.setMarkerState(job);
    // return this.props.onTakeJob();
  },

  cancelJob: function(e){
    // console.log("cancel job");
    var job = this.findJob(this.props.jobs, e.target.value);
    return this.props.onCancelJob(job);

  },

  completeJob: function(e){
    
 
       if (confirm("Just checking you completed this job and we can delete it from our database?") == true) {
           var job = this.findJob(this.props.jobs, e.target.value);
           this.props.onCompleteJob(job);
       } else {
           return null;
       }
       
    
  },

  setMarkerState: function(job){
    this.setState({job: job})
  },  

  jobButtons: function(job, index){
    var takeJobButton = <button className= "pure-button button-small" onClick = {this.takeJob} value = {index}>Take Job</button>
    var cancelJobButton = <button className= "pure-button button-small" onClick = {this.cancelJob} value = {index}>Release Job</button>
    var completeJobButton = <button className= "pure-button button-small"onClick = {this.completeJob} value = {index}> Complete Job </button>

    // edit
    // delete

    if (job.courier_id === null) {
      return (
        <div>
          {takeJobButton}
        </div>
      )
    } else {
      return (
        <div>
          {cancelJobButton}
          {completeJobButton}
        </div>
      )
    }
  },

  jobStyle: function(job){
    if(job.courier_id === null){
        return "job job-available";
      }  
        return "job job-taken";
    
  },

  addressComponent: function(job){
    if(this.props.address){
      return <Address company = {job.company}/>
    } else {
      return null;
    }

  },

  // renderMultipleJobsForOneCompany: function(){

  // },

  render:function(){
    var jobs = this.props.jobs.map(function(job, index){
      
      var method;
      if (job.category === "Supply"){
        method = " Collect: ";
      }
      if (job.category === "Demand"){
        method = " Deliver:";
      }
      
      return (
      <div className={this.jobStyle(job)} key={index} jobIndex={index}>
        <div>
        <strong>{method}</strong> {job. quantity} x {job.item}. Available from: {job.from_date} to: {job.to_date} <br/>Instructions: {job.instructions}
        </div>
        {this.addressComponent(job)}
        {this.jobButtons(job, index)}
      </div>)
    }.bind(this))

    return(
      <div>  
        {jobs}
      </div>
      )
  }

})


module.exports = JobList;