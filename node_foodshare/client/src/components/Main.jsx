var React = require('react');

var Main = React.createClass({
  getInitialState: function(){
    return{currentUser:null, jobs:[]};
  },

  setUser:function(user){
    this.setState({currentUser:user, jobs:[]});
    this.fetchJobs();
  },

  fetchJobs: function(){
    console.log("fetching jobs")
    var request = new XMLHttpRequest();
    request.open("GET", this.props.url + "jobs.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;

    request.onload = function(){
      if(request.status === 200){
        console.log('request.responseText', request.responseText);
        var accounts = JSON.parse(request.responseText);
        this.setState({jobs: jobs})
      }
    }.bind(this)
    request.send(null);
  },

  

  render: function(){
    return(
      <h4> Scran Share </h4>
    )
  }

});



module.exports = Main;