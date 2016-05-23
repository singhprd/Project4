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

//child components:
var JobList = require('./JobList');
var GoogleMap = require('./GoogleMap');

//beginning attempts at newing up a google map:

// var Map = require('../map/googlemap');

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

      var mainDiv = null;

      if(!this.state.currentUser) {
        mainDiv = (
          <div>
            <h4> Please Sign In/Up </h4>
            <SignIn url={this.props.url + "users/sign_in.json"} onSignIn={this.setUser}></SignIn>
            <SignUp url={this.props.url + "users.json"} onSignUp={this.setUser}></SignUp>
          </div>
        )
      } else {
        if(this.state.currentUser.company_id !== null) {
          // USER HAS COMPANY
          mainDiv = <div>
           <CompanyView/>
            <SignOut url={this.props.url + "users/sign_out.json"} onSignOut={this.setUser}></SignOut>
            </div>
        } else if (this.state.currentUser.courier_id !== null) {
          // USER IS A COURIER
          mainDiv = <div>
           <CourierView/>
           <GoogleMap jobs={this.state.jobs}/>
            <SignOut url={this.props.url + "users/sign_out.json"} onSignOut={this.setUser}></SignOut>
            </div>
        } else {
          // USER IS NOT COURIER OR COMPANY
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