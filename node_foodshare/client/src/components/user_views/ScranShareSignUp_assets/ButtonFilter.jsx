var React = require('react');

var ButtonFilter = React.createClass({
  render: function(){
    return (
      <div>
        <button value="company" onClick={this.props.selectType} type="submit" className="pure-button pure-button-primary"> <i className="fa fa-check" aria-hidden="true"> </i> Company? </button>

        <button value="courier" onClick={this.props.selectType} type="submit" className="pure-button pure-button-primary"> <i className="fa fa-check" aria-hidden="true"> </i> Courier? </button>
      </div>
      )
  } 
});

module.exports = ButtonFilter;