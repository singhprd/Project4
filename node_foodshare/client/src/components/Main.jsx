var React = require('react');
var SignIn = require('./authentication/SignIn.jsx');
var SignUp = require('./authentication/SignUp.jsx');
var SignOut = require('./authentication/SignOut.jsx');

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
      var mainDiv = <div>
        <h4> Please Sign In/Up </h4>
        <SignIn url={this.props.url + "users/sign_in.json"} onSignIn={this.setUser}></SignIn>
        <SignUp url={this.props.url + "users.json"} onSignUp={this.setUser}></SignUp>
      </div>
      if(this.state.currentUser){
        mainDiv = <div>
          <h4> Welcome {this.state.currentUser.email}</h4>
          <AccountList jobs={this.state.jobs}/>
          <SignOut url={this.props.url + "users/sign_out.json"} onSignOut={this.setUser}></SignOut>
        </div>
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