import React, {Component} from 'react';
import {checkboxEnum, ResultType} from './constants.js';

var checkValue = [];
class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newResults: this.props.allResults
    }
  }

  _changecheck(marks) {
    var filteredData = Object.assign([],this.state.newResults);
    var min = checkboxEnum[marks].min;
    var max = checkboxEnum[marks].max;
    filteredData = filteredData.filter(function (index) {
      if(index.percentage >= min && index.percentage < max) {
        return index.firstName;
      }
    })
    if(event.target.id === marks && event.target.checked) {
      checkValue = _.uniq(filteredData.concat(checkValue));
      this.props.handleCheck(checkValue);
    }
    if(event.target.id === marks && event.target.checked == false) {
      checkValue = _.difference(checkValue,filteredData);
      if(checkValue.length) {
      this.props.handleCheck(checkValue);
     } else {
      this.props.handleCheck(this.state.newResults);
     }
   }
  }

  render() {
    return (
      <div className="clearfix">
      {
        _.map(ResultType, (item, key) => {
          return (
            <div key={key} className="pull-left">
              <input type = "checkbox" onChange = {this._changecheck.bind(this,item)} id={item}/>
              <label for={item}>{item}</label>
            </div>
          )
        })
      }
      </div>
    );
  }
};

export default Checkbox;
