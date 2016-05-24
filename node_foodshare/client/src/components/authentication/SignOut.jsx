var React = require('react');
var SignOut = React.createClass({
  signOut:function(e){
    e.preventDefault();
    var request = new XMLHttpRequest();
    request.open("DELETE", this.props.url);
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;
    request.onload = function(){
      if(request.status === 204){
        this.props.onSignOut(null);
      }else if(request.status === 401){
      }
    }.bind(this)
    request.send(null);
  },
  render: function() {
    return (
      <button className="pure-button pure-button-primary" onClick={this.signOut}> <i className="fa fa-sign-out" aria-hidden="true"> </i> Sign Out</button>
    );
  }
});

module.exports = SignOut;