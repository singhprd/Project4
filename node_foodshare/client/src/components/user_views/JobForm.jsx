Date.prototype.isValid = function () {
  // An invalid date object returns NaN for getTime() and NaN is the only
  // object not strictly equal to itself.
  return this.getTime() === this.getTime();
};  

var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SupplyItemForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {item:'',instructions:'',quantity:'', from_date: '', to_date: '', error:'', submited:false}
  },
  resetForm: function() {
    this.setState({item:'',instructions:'',quantity:'', from_date: '', to_date: '', error:'', submited:false});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var a = new Date(this.state.from_date);
    var b = new Date(this.state.to_date);

    if(!a.isValid() || !b.isValid()) {
      console.log("dates not valid")
      this.setState({error:"Check Dates are valid"})
      return
    }
    var request = new XMLHttpRequest();
    request.open("POST", this.props.url+'jobs');
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;
    request.onload = function(){
      if(request.status === 200){
        console.log(request.responseText);
        this.setState({submited: true});
      }else {
        console.log("error posting job data", request.status)
      }
    }.bind(this)
    var data = {
      instructions:this.state.instructions,
      quantity:this.state.quantity,
      item:this.state.item,
      from_date: this.state.from_date,
      to_date: this.state.to_date
    }
    request.send(JSON.stringify(data));
  },
  render: function() {
      var toReturn;
      var SubmittedView = (<div>
        <p>Awesome, thats submitted!</p>
        <button onClick={this.resetForm} className="pure-button button-success"> <i className="fa fa-arrow-left" aria-hidden="true"></i> Go Back</button>
        </div>)
      var FormView = (
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

      <div className="pure-control-group">
      <label for="from_date">from_date</label>
      <input valueLink={this.linkState('from_date')} id="from_date" type="date" placeholder="from_date"/>
      </div>
      <div className="pure-control-group">
      <label for="to_date">to_date</label>
      <input valueLink={this.linkState('to_date')} id="to_date" type="date" placeholder="to_date"/>
      </div>

      <div className="pure-controls">
      <button onClick={this.handleSubmit} type="submit" className="pure-button pure-button-primary"> <i className="fa fa-check" aria-hidden="true"></i> Submit</button>
      </div>
      </fieldset>
      </form>
      {this.state.error}
      </div>
      )

      if(this.state.submited) {
        toReturn = SubmittedView;
      } else {
        toReturn = FormView;
      }

      return <div>{toReturn}</div>
  }
});

module.exports = SupplyItemForm;

