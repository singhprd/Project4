var React = require('react');

var CompanyNavbar = React.createClass({
  signOut:function(e){
    e.preventDefault();
    var request = new XMLHttpRequest();
    request.open("DELETE", this.props.url + "users/sign_out.json");
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
  toggleClassNames: function() {
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
  },
  handleClick: function(e) {
    e.preventDefault();
    this.props.changeView(e.target.value);
    this.toggleClassNames();
  },
  render: function() {
    return (
      <div> 
      <ul className="topnav">
      <li id="navbar-scranshare">ScranShare</li>
      <li><a onClick={this.handleClick} value="foodForm">Food Form</a></li>
      <li><a onClick={this.handleClick} value="donations">Donations</a></li>
      <li><a onClick={this.signOut}>Sign Out</a></li>

      <li className="icon">
      <a onClick={this.toggleClassNames}>&#9776;</a>
      </li>
      </ul>
      </div>
      )
  }
});

module.exports = CompanyNavbar;

