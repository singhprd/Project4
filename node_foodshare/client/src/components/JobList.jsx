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
    console.log("trying to complete job");
    var job = this.findJob(this.props.jobs, e.target.value);
    this.props.onCompleteJob(job);
  },

  editJob: function(e){
    console.log("trying to edit job");
    var job = this.findJob(this.props.jobs, e.target.value);
    this.props.onEditJob(job);
  },

  deleteJob: function(e){
    console.log("trying to delete job");
    var job = this.findJob(this.props.jobs, e.target.value);
    this.props.onDeleteJob(job);
  },

  setMarkerState: function(job){
    this.setState({job: job})
  },  

  jobButtons: function(job, index){
    // courier buttons
    var takeJobButton = <button onClick = {this.takeJob} value = {index}>Take Job</button>
    var cancelJobButton = <button onClick = {this.cancelJob} value = {index}>Cancel My Job</button>
    var completeJobButton = <button onClick = {this.completeJob} value = {index}> Complete Job </button>
    // company buttons
    var editJobButton = <button onClick = {this.editJob} value = {index}>Edit Job</button>
    var deleteJobButton = <button onClick = {this.deleteJob} value = {index}>Delete Job</button>

    // edit
    // delete

    if (this.props.company) {
      return (
        <div>
          {editJobButton}
          {deleteJobButton}
        </div>)
    } else if (job.courier_id === null) {
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
        return "job-available";
      }  
        return "job-taken";
    
  },

  render:function(){
    var jobs = this.props.jobs.map(function(job, index){
      
      var method;
      if (job.category === "Supply"){
        method = " collected from ";
      }
      if (job.category === "Demand"){
        method = " delivered to ";
      }
      
      return (<div key={index} jobIndex={index}>
      <li className={this.jobStyle(job)}>
      {job. quantity} x {job.item} to be {method} {job.company.name} from {job.from_date} to {job.to_date} <br/>Instructions: {job.instructions}
      </li>
      <Address address = {job.company.contactDetails}/>  
      {this.jobButtons(job, index)}
      </div>)
    }.bind(this))

    return(
      <div>
        <h4> My job list</h4>
        <ul>
        {jobs}
        </ul>

      </div>
      )
  }

})


module.exports = JobList;