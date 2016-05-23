var React = require('react');
var SignIn = require('./authentication/SignIn.jsx');
var SignUp = require('./authentication/SignUp.jsx');
var SignOut = require('./authentication/SignOut.jsx');
var ScranShareSignUp = require('./user_views/ScranShareSignUp.jsx')
var ScranShareSignUp = require('./user_views/ScranShareSignUp.jsx')
var CompanyView = require('./user_views/CompanyView.jsx')
var CourierView = require('./user_views/CourierView.jsx')

//sample job to pass through to joblist if required:
// var sampleJSON = require('../sample.json');

var JobList = require('./JobList');
var Address = require('./Address');

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
      var zoom = 16;
      // var map = new Map(center, zoom); 

      var mainDiv = null;

      if(!this.state.currentUser) {
        mainDiv = <div>
        <h4> Please Sign In/Up </h4>
        <SignIn url={this.props.url + "users/sign_in.json"} onSignIn={this.setUser}></SignIn>
        <SignUp url={this.props.url + "users.json"} onSignUp={this.setUser}></SignUp>
        </div>
      } else {
        if(this.state.currentUser.company_id !== null) {
          console.log('THERE IS A COMPANY ID')
          mainDiv = <div>
           <CompanyView/>
            <SignOut url={this.props.url + "users/sign_out.json"} onSignOut={this.setUser}></SignOut>
            </div>
        } else if (this.state.currentUser.courier_id !== null) {
          console.log("THERE IS A COURRIER ID")
          mainDiv = <div>
           <CourierView/>
            <SignOut url={this.props.url + "users/sign_out.json"} onSignOut={this.setUser}></SignOut>
            </div>
        } else {
          console.log("THERE IS NO ID");
          mainDiv = <div>
           <ScranShareSignUp url={this.props.url}/>
            <SignOut url={this.props.url + "users/sign_out.json"} onSignOut={this.setUser}></SignOut>
            </div>
        }
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


      //     mainDiv = <div>
      //   <h4> Welcome {this.state.currentUser.email}</h4>
      //   <JobList jobs={this.state.jobs}/>
      //   <Address address={this.state.jobs}/>
      //   <GoogleMap coords = {center} zoom = {zoom}/>
        // <SignOut url={this.props.url + "users/sign_out.json"} onSignOut={this.setUser}></SignOut>
      // </div>