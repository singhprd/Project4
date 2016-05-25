var React = require('react');

var FormSuccessPage = React.createClass({
  handleClick:function(e){
    e.preventDefault();
    this.props.changeView("foodForm");
  },
  render:function() {
    return ( 
      <div>
        <p>Awesome, thats submitted!</p>
        <button onClick={this.handleClick} className="pure-button button-success"> <i className="fa fa-arrow-left" aria-hidden="true"></i> Go Back</button>
      </div>
      )
  }   
})    

module.exports = FormSuccessPage;



    