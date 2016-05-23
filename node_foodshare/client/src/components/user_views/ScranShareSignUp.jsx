var React = require('react');
var ButtonFilter = require('./ScranShareSignUp_assets/ButtonFilter.jsx')
var CompanyForm = require('./ScranShareSignUp_assets/CompanyForm.jsx')
var CourierForm = require('./ScranShareSignUp_assets/CourierForm.jsx')

var ScranShareSignUp = React.createClass({
  getInitialState: function() {
    return {company:{}, typeToDisplay:"none" }
  },
  selectType: function(e){
    e.preventDefault();
    this.setState({"typeToDisplay":e.target.value});
  },
  render: function() {
    var mainDisplay;
    if(this.state.typeToDisplay === "none") {
      mainDisplay = <ButtonFilter selectType={this.selectType}/>
    }
    if(this.state.typeToDisplay === "company") {
      mainDisplay = <CompanyForm url={this.props.url} selectType={this.selectType}/>
    }
    if(this.state.typeToDisplay === "courier") {
      mainDisplay = <CourierForm url={this.props.url} selectType={this.selectType}/>
    }
    return (
      <div> 
        
        <h1>Who are you?</h1>
        {mainDisplay}
      </div>
      )
  }
})

module.exports = ScranShareSignUp;

