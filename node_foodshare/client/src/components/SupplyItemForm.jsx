// http://purecss.io/forms/
// I used these docs to make this form

var React = require('react');

var SupplyItemForm = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Supply Item Form</h1>
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
          <button type="submit" className="pure-button pure-button-primary">Submit</button>
          </div>

        </fieldset>
        </form>
      </div>
      )
  }
});

module.exports = SupplyItemForm;

