var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SignIn = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {email:"", password:""};
  },
  signIn:function(e){
    e.preventDefault();
    var request = new XMLHttpRequest();
    request.open("POST", this.props.url);
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;
    request.onload = function(){
      if(request.status === 201){
        let user = JSON.parse(request.responseText)
        this.props.onSignIn(user);
      }else if(request.status === 401){
      }
    }.bind(this)
    var data = {
      user:{
        email:this.state.email,
        password:this.state.password
      }
    }
    request.send(JSON.stringify(data));
  },
  render: function() {
    return (
      <form onSubmit={this.signIn} className="pure-form pure-form-stacked">
        <input type="text" valueLink={this.linkState('email')} placeholder="Email" />
        <input type="password" valueLink={this.linkState('password')} placeholder="Password" />
        <button className="pure-button pure-button-primary" onClick={this.signIn}>  Sign In </button>
      </form>
    );
  }
});

module.exports = SignIn;
