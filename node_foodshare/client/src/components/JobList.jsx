var React = require('react');

var Address = require('./Address');

var JobList = React.createClass({

  completedJob: function(){
    console.log("completed");
  },

  cancelledJob: function(){
    console.log("bailed out");
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
      
      return (<div key={index}>
      <li>
      {job. quantity} x {job.item} to be {method} {job.company.name} from {job.from_date} to {job.to_date} <br/>Instructions: {job.instructions}
      </li>
      <Address address = {job.company.contactDetails}/>  
      <button onClick = {this.completedJob}>Completed</button>
      <button onClick = {this.cancelledJob}>Cancel</button>
    
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