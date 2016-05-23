var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var CompanyForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {companyName: '', phoneNumber: '', address1: '', address2: '', address3: '', postcode: '', email: ''};
  },
  handleSubmit: function(e){
    e.preventDefault(e);
    var toPost = {
      name: this.state.companyName,
      lat: 55.946967,
      lng: -3.202021,
      phone: this.state.phoneNumber,
      email: this.state.email,
      address1: this.state.address1,
      address2: this.state.address2,
      address3: this.state.address3,
      postcode: "EH1 2EL"
    }
  },
  render: function() {
    return (
      <div>
        <button value="none" onClick={this.props.selectType} type="submit" className="pure-button pure-button-primary"> <i className="fa fa-check" aria-hidden="true"> </i> Go Back! </button>

        <form className="pure-form pure-form-aligned">
        <fieldset>

          <div className="pure-control-group">
            <label for="companyName">Company Name</label>
            <input valueLink={this.linkState('companyName')}  id="companyName" type="text" placeholder="Company Name"/>
          </div>

          <div className="pure-control-group">
            <label for="phoneNumber">Phone Number</label>
            <input valueLink={this.linkState('phoneNumber')} id="phoneNumber" type="text" placeholder="Phone Number"/>
          </div>

          <div className="pure-control-group">
            <label for="email">Email</label>
            <input valueLink={this.linkState('email')} id="email" type="email" placeholder="Email"/>
          </div>

          <div className="pure-control-group">
            <label for="address1">Address 1</label>
            <input valueLink={this.linkState('address1')} id="address1" type="text" placeholder="Address 1"/>
          </div>
          <div className="pure-control-group">
            <label for="address2">Address 2</label>
            <input valueLink={this.linkState('address2')} id="address2" type="text" placeholder="Address 2"/>
          </div>
          <div className="pure-control-group">
            <label for="address3">Address 3</label>
            <input valueLink={this.linkState('address3')} id="address3" type="text" placeholder="Address 3"/>
          </div>
          <div className="pure-control-group">
            <label for="postcode">Postcode</label>
            <input valueLink={this.linkState('postcode')} id="postcode" type="text" placeholder="Postcode"/>
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

module.exports = CompanyForm;