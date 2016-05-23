var React = require('react');

var CourierForm = React.createClass({
  render: function() {
    return (
      <div>
        <button value="none" onClick={this.props.selectType} type="submit" className="pure-button pure-button-primary"> <i className="fa fa-check" aria-hidden="true"> </i> Go Back! </button>

        <form className="pure-form pure-form-aligned">
        <fieldset>

          <div className="pure-control-group">
            <label for="item">item</label>
            <input id="item" type="text" placeholder="item"/>
          </div>

          <div className="pure-control-group">
            <label for="quantity">quantity</label>
            <input id="quantity" type="text" placeholder="quantity"/>
          </div>

          <div className="pure-control-group">
            <label for="instructions">instructions</label>
            <input id="instructions" type="text" placeholder="instructions"/>
          </div>

          <div className="pure-controls">
          <button type="submit" className="pure-button pure-button-primary"> <i className="fa fa-check" aria-hidden="true"></i> Submit</button>
          </div>

        </fieldset>
        </form>
      </div>
      )
  }
});

module.exports = CourierForm;

