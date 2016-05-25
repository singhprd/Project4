var React = require('react');

var ShowAllJobs = React.createClass({
  render: function(){
    // var itemView = this.createItemView();
    // console.log(itemView)
    return (
      <div>
        {this.props.jobs.toString()}
      </div>
      )
  }
});

module.exports = ShowAllJobs;