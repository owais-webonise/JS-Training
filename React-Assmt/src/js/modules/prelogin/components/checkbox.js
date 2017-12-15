import React, {Component} from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newResults: this.props.allResults
    }
    this._changecheck = this._changecheck.bind(this);
  }

_changecheck(event) {
  if(event.target.id === "distinction") {
    var filteredData = Object.assign([],this.state.newResults);
    filteredData = filteredData.filter(function (index) {
      if(index.percentage >= 60) {
        return index.firstName;
      }
    })
  }
   if(event.target.id === "first" ) {
    var filteredData = Object.assign([],this.state.newResults);
    filteredData = filteredData.filter(function (index) {
      if(index.percentage >= 50 && index.percentage < 60) {
        return index.firstName;
      }
    })
   }
   if(event.target.id === "second") {
    var filteredData = Object.assign([],this.state.newResults);
    filteredData = filteredData.filter(function (index) {
      if(index.percentage >= 40 && index.percentage < 50) {
        return index.firstName;
      }
    })
   }
   if(event.target.id === "fail") {
    var filteredData = Object.assign([],this.state.newResults);
    filteredData = filteredData.filter(function (index) {
      if(index.percentage < 40) {
        return index.firstName;
      }
    })
   }
   if(event.target.checked == false) {
    var filteredData = Object.assign([],this.state.newResults);
   }
  this.props.handleCheck(filteredData);
}

  render() {
    return (
      <div>
        <input type = "checkbox" onChange = {this._changecheck} id="distinction"/>
        <label for="distinction">Distinction</label>
        <input type = "checkbox" onChange = {this._changecheck} id="first"/>
        <label for="first">First Class</label>
        <input type = "checkbox" onChange = {this._changecheck} id="second"/>
        <label for="second">Second Class</label>
        <input type = "checkbox" onChange = {this._changecheck} id="fail"/>
        <label for="fail">Fail</label>
      </div>
    );
  }

};

export default Checkbox;
