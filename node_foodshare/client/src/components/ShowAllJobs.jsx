var React = require('react');
var CompanyView = require('./user_views/CompanyView');

var ShowAllJobs = React.createClass({

  getInitialState: function(){
    return{job: null}
  },

  findJob: function(jobs, index){
    var job = jobs[index];
    return job;
  },

  deleteJob: function(e){
    var job = this.findJob(this.props.jobs, e.target.value);
    return this.props.onDeleteJob(job);
  },
  handleEditClick: function(e) {
    this.props.changeView("editJobView")
    var job = this.findJob(this.props.jobs, e.target.value)
    this.props.onChooseJobForEdit(job)
  },

  deleteButton: function(job, index){
    var deleteJobButton = <button onClick ={this.deleteJob} value ={index}> DELETE</button>
    return(
    <div>
    {deleteJobButton}
    </div>
    )
  },


  render: function(){
    var jobs = this.props.jobs.map(function(job, index){

    return (<div key={index} jobIndex={index}>
        <li>
        {job.category} {job.item} {job.quantity} {job.instructions} {job.from_date} {job.to_date} 
        </li>
        <button onClick={this.handleEditClick} value={index}>UPDATE</button>

    </div>  
    )
  }.bind(this))


    return(
      <div>
        <ul>
          {jobs}
         </ul> 
      </div>
    )
  }

});
// {this.updateButton(job, index)}
// {this.deleteButton(job, index)}
module.exports = ShowAllJobs;