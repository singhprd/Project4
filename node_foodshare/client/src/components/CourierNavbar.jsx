var React = require('react');

var CourierNavbar = React.createClass({
  signOut:function(e){
    e.preventDefault();
    var request = new XMLHttpRequest();
    request.open("DELETE", this.props.url + "users/sign_out.json");
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
          <li><a href="#home">Home</a></li>
          <li><a onClick={this.handleClick} value="mapview" href="#Map View">Map View</a></li>
          <li><a onClick={this.handleClick} value="showalljobs" href="#Show All Jobs">Show All Jobs</a></li>
          <li><a onClick={this.signOut} href="#about">Sign Out</a></li>

          <li className="icon">
          <a onClick={this.toggleClassNames}>&#9776;</a>
          </li>
        </ul>
      </div>
      )
  }
});

module.exports = CourierNavbar;

