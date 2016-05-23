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
      console.log("com")
      mainDisplay = <CompanyForm selectType={this.selectType}/>
    }
    if(this.state.typeToDisplay === "courier") {
      console.log("crrr")
      mainDisplay = <CourierForm selectType={this.selectType}/>
    }
    return (
      <div> 
        
        <h1>ScranShareSignUp</h1>
        {mainDisplay}
      </div>
      )
  }
})

module.exports = ScranShareSignUp;

