var React = require('react');

var Address = React.createClass({

  

  render:function(){

    var address = this.props.address.map(function(job, index){
      return (<div> <li key ={index}> {job.company.contactDetails.address1} </li><li> {job.company.contactDetails.address2} </li><li> {job.company.contactDetails.address3} </li><li> {job.company.contactDetails.postcode} </li><li> {job.company.contactDetails.phone} </li></div>) ;
    });

    return(
      <div>
        <ul>
        {address}
        </ul>


    </div>
    )
  }



})

module.exports = Address;