var React = require('react');

var Address = React.createClass({

  

  render:function(){

    var address = this.props.address.map(function(job){
      return (<div> <li> {job.company.contactDetails.address1} </li></div>) ;
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