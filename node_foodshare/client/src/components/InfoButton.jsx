var React = require('react');

var InfoButton = React.createClass({

handleCloseClick:function(){
  return this.props.onCloseClick();


},

  

render:function(){
  var clickInfoWindow = function(){
      console.log(4+2);
  };

  return (
          <div id = "my-info-window">
          <h3>Job</h3>
          <h4>Company Details</h4>
          <p>{this.props.job.company.name}</p>
          <ul>
            <li>{this.props.job.company.contactDetails.address1}, {this.props.job.company.contactDetails.postcode}</li>
            <li>{this.props.job.company.contactDetails.phone}</li>
            <li>{this.props.job.company.contactDetails.email}</li>
          </ul>
          <h4>Job Type: {this.props.job.category}</h4>
          <ul>
            <li>{this.props.job.quantity} x {this.props.job.item}</li>
            <li>{this.props.job.instructions}</li>
          </ul>
          <button onClick = {this.handleCloseClick}>Close</button>
          </div>  
  )
}

})


module.exports = InfoButton;