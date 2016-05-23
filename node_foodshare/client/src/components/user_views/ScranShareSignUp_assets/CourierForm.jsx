var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var CourierForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {first_name: '', last_name: '', phone_number: ''};
  },
  handleSubmit: function(e){
    e.preventDefault();
  },
  render: function() {
    return (
      <div>
        <button value="none" onClick={this.props.selectType} type="submit" className="pure-button pure-button-primary"> <i className="fa fa-arrow-left" aria-hidden="true"> </i> Go Back! </button>

        <form className="pure-form pure-form-aligned">
        <fieldset>

          <div className="pure-control-group">
            <label for="first_name">First Name</label>
            <input valueLink={this.linkState('first_name')} id="first_name" type="text" placeholder="First Name"/>
          </div>

          <div className="pure-control-group">
            <label for="last_name">Last Name</label>
            <input valueLink={this.linkState('last_name')} id="last_name" type="text" placeholder="Last Name"/>
          </div>

          <div className="pure-control-group">
            <label for="phone_number">Phone Number</label>
            <input valueLink={this.linkState('phone_number')} id="phone_number" type="text" placeholder="Phone Number"/>
          </div>

          <div className="pure-controls">
          <button onClick={this.handleSubmit} type="submit" className="pure-button pure-button-primary"> <i className="fa fa-check" aria-hidden="true"></i> Submit</button>
          </div>

        </fieldset>
        </form>
      </div>
      )
  }
});

module.exports = CourierForm;

