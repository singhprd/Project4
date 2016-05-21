var React = require('react');



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
      if (job.type === "supply"){
        method = " collected from ";
      }
      if (job.type === "demand"){
        method = " delivered to ";
      }
      
      return (<div>
      <li key = {index}>
      {job. quantity} x {job.item} to be {method} {job.company.name} from {job.fromDate} to {job.toDate} Instructions: {job.instructions}
      </li>
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