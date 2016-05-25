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
    this.props.onTakeJob(job);
    // this.setMarkerState(job);
    // return this.props.onTakeJob();
  },

  cancelledJob: function(e){
    console.log("cancel job");
    var job = this.findJob(this.props.jobs, e.target.value);
    return this.props.onCancelJob(job);
  },

  setMarkerState: function(job){
    this.setState({job: job})
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
      <li>
      {job. quantity} x {job.item} to be {method} {job.company.name} from {job.from_date} to {job.to_date} <br/>Instructions: {job.instructions}
      </li>
      <Address address = {job.company.contactDetails}/>  
      <button onClick = {this.takeJob} value = {index}>Take Job</button>
      <button onClick = {this.cancelledJob} value = {index}>Cancel My Job</button>
    
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