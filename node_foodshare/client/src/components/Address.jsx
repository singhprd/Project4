var React = require('react');

var Address = React.createClass({

  

  render:function(){

    //old version:
    // var address = this.props.address.map(function(job, index){
    //   return (<div> <li key ={index}> {job.company.contactDetails.address1} </li><li> {job.company.contactDetails.address2} </li><li> {job.company.contactDetails.address3} </li><li> {job.company.contactDetails.postcode} </li><li> {job.company.contactDetails.phone} </li></div>) ;
    // });



    return(
      <div>
        <ul>
        <li>{this.props.address.address1}, {this.props.address.address2}, {this.props.address.address3} </li>
        <li>{this.props.address.postcode}</li>
        <li>{this.props.address.phone}</li>
        <li>{this.props.address.email}</li>
        </ul>


    </div>
    )
  }



})

module.exports = Address;