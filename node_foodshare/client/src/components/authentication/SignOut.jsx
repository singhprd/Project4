var React = require('react');
var SignOut = React.createClass({
  signOut:function(e){
    e.preventDefault();
    var request = new XMLHttpRequest();
    request.open("DELETE", this.props.url);
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;
    request.onload = function(){
      console.log('signed out', request.status)
      if(request.status === 204){
        this.props.onSignOut(null);
      }else if(request.status === 401){
      }
    }.bind(this)
    request.send(null);
  },
  render: function() {
    return (
      <button onClick={this.signOut}>Sign Out</button>
    );
  }
});

module.exports = SignOut;