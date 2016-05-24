// http://purecss.io/forms/
// I used these docs to make this form

var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SupplyItemForm = React.createClass({
    mixins: [LinkedStateMixin],

    getInitialState: function() {
      return {item:'',instructions:'',quantity:''}
    },

    handleSubmit: function(e){
      e.preventDefault();
      var request = new XMLHttpRequest();
      request.open("POST", this.props.url+'jobs');
      request.setRequestHeader("Content-Type", "application/json");
      request.withCredentials = true;
      request.onload = function(){
        if(request.status === 200){
          console.log(request.responseText);
        }else {
          console.log("error posting job data", request.status)
        }
      }.bind(this)
      var data = {
        instructions:this.state.instructions,
        quantity:this.state.quantity,
        item:this.state.item
      }
    request.send(JSON.stringify(data));
  },
  render: function() {
    return (
      <div>
        <form className="pure-form pure-form-aligned">
        <fieldset>
          <div className="pure-control-group">
            <label for="item">item</label>
            <input  valueLink={this.linkState('item')} id="item" type="text" placeholder="item"/>
          </div>

          <div className="pure-control-group">
            <label for="quantity">quantity</label>
            <input valueLink={this.linkState('quantity')} id="quantity" type="text" placeholder="quantity"/>
          </div>

          <div className="pure-control-group">
            <label for="instructions">instructions</label>
            <input valueLink={this.linkState('instructions')} id="instructions" type="text" placeholder="instructions"/>
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

module.exports = SupplyItemForm;

