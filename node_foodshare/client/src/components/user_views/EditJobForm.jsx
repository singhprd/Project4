Date.prototype.isValid = function () {
  // An invalid date object returns NaN for getTime() and NaN is the only
  // object not strictly equal to itself.
  return this.getTime() === this.getTime();
};  


var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var EditJobForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {id: this.props.job.id, item:this.props.job.item,instructions:this.props.job.instructions,quantity:this.props.job.quantity, from_date: this.getTodaysDate(), to_date: this.getTodaysDate(), error:'', submited:false, category:this.props.job.category}
  },

 getTodaysDate: function() {
   var d = new Date();
   var year = d.getFullYear();
   var month = d.getMonth() + 1;
   if(month < 10) {
     month = `0${month}`
   }
   var date = d.getDate();
   if(date < 10) {
     date = `0${date}`
   }
   return `${year}-${month}-${date}`
 },
  handleSubmit: function(e){
    e.preventDefault()
    this.props.onUpdate(this.state)
  //   this.setState(item:this.props.job.item,instructions:this.props.job.instructions,quantity:this.props.job.quantity, from_date: this.getTodaysDate(), to_date: this.getTodaysDate(), error:'', submited:false, category:this.props.job.category}
  // })
    // this.props.onUpdateJob(this)

  }, 


  render: function(){
    // console.log("reached render in EditJobForm")
    // console.log(this.props)
    console.log(this.state)
      var FormView = (
        <div>
        <form className="pure-form pure-form-aligned">
        <fieldset>

        <div className="pure-control-group">
        <label for="state">Type</label>
        <select valueLink={this.linkState('category')} id="state">
        <option value="Supply">Supply</option>
        <option value="Demand">Demand</option>
        </select>
        </div>

        <div className="pure-control-group">
        <label for="item">item</label>
        <input valueLink={this.linkState('item')} id="item" type="text" placeholder="item"/>
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

        return <div>{FormView}</div>

  }

});


module.exports = EditJobForm;