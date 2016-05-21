var React = require('react');
var SignIn = require('./authentication/SignIn.jsx');
var SignUp = require('./authentication/SignUp.jsx');
var SignOut = require('./authentication/SignOut.jsx');

//sample job to pass through to joblist if required:
// var sampleJSON = require('../sample.json');

var JobList = require('./JobList');

//beginning attempts at newing up a google map:
var GoogleMap = require('./GoogleMap');
var Map = require('../map/googlemap');

//does the initial state have an empty array of jobs? i.e previous saved jobs could be store here 
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
        var jobs = JSON.parse(request.responseText);
        this.setState({jobs: jobs})
      }
    }.bind(this)
    request.send(null);
  },

  fetchUser: function(){
    console.log("fetching user")
    var request = new XMLHttpRequest();
    request.open("GET", this.props.url + "users.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;

    request.onload = function(){
      if(request.status === 200){
        console.log('request.responseText', request.responseText);
        var receivedUser = JSON.parse(request.responseText);
        this.setUser(receivedUser)
      }else if(request.status === 401){
        this.setState({currentUser:false});
      }
    }.bind(this)
    request.send(null);
  },

  componentDidMount: function(){
    this.fetchUser();
  },

    render: function() {
     
      var jsonURL = "http://localhost:3000/jobs.json";

      var center = {lat:55.9520, lng: -3.1900};
      var zoom = 14;
      // var map = new Map(center, zoom);
 

      var mainDiv = <div>
        <h4> Please Sign In/Up </h4>
        <SignIn url={this.props.url + "users/sign_in.json"} onSignIn={this.setUser}></SignIn>
        <SignUp url={this.props.url + "users.json"} onSignUp={this.setUser}></SignUp>
      </div>
      if(this.state.currentUser){
        mainDiv = <div>
          <h4> Welcome {this.state.currentUser.email}</h4>
          <JobList jobs={this.state.jobs}/>
          <SignOut url={this.props.url + "users/sign_out.json"} onSignOut={this.setUser}></SignOut>
        </div>
      }
      return (
        <div>
          <h1> Scran Share </h1>
          { mainDiv }
          <a href = {jsonURL}>See the JSON data</a>
          
          
        </div>
      );
    }
  });

  module.exports = Main;