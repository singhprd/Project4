var React = require('react');

var ButtonFilter = React.createClass({
  render: function(){
    return (
      <div>
      <p> 
        <button value="company" onClick={this.props.selectType} type="submit" className="pure-button pure-button-primary"> <i className="fa fa-building" aria-hidden="true"> </i> Company ? </button>
      </p>
      <p>
        <button value="courier" onClick={this.props.selectType} type="submit" className="pure-button pure-button-primary"> <i className="fa fa-bicycle" aria-hidden="true"> </i> Courier ? </button>
      </p>
      </div>
      )
  } 
});

module.exports = ButtonFilter;