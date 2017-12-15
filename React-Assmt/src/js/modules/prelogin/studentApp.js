import React, { Component } from 'react';
import allResults from './../../../static/files/results.json';
import Search from './components/search.js'
import Checkbox from './components/checkbox.js'
import '../../../static/stylesheets/style';
import { Link } from 'react-router';

var total,percentage;
class StudentApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allResults : allResults.results,
      searchResults: [],
      newResults: []
    };
  }

  _generateTable() {
    var percentageResults = Object.assign([],this.state.allResults);
    return this.state.allResults.map((value, key) => {
      total = (value.marks.english + value.marks.hindi + value.marks.mathematics);
      percentage = parseInt(total / 3,10);
      percentageResults[key].percentage= percentage;

      return (
        <tr key = {key} className = {percentage < 35 ? "failColor" : null}>
          <td><Link to={{pathname: "home/", query: {param1: value.firstName, param2: value.lastName, param3: value.marks.english, param4: value.marks.hindi, param5: value.marks.mathematics, param6: total, param7:percentage }}} className="field" target="_blank">{value.firstName}</Link></td>
          <td>{value.lastName}</td>
          <td>{percentage}</td>
        </tr>
      )
     }
    );
  }

  searchMe(incomingsearchValue) {
    this.setState({
      allResults: incomingsearchValue
    })
  }

  checkMe(incomingcheckValue) {
    this.setState({
      allResults: incomingcheckValue
    })
  }
  render() {
    return (
      <div>
        <form>
          <Search allResults={allResults}
          searchResults={this.state.searchResults}
          handleSearch={this.searchMe.bind(this)} />
          <Checkbox allResults={this.state.allResults}
          handleCheck={this.checkMe.bind(this)} />
        </form>
        <th> First Name </th>
        <th> Last Name </th>
        <th> Percentage </th>
          {this._generateTable()}
      </div>
    );
  }
};

export default StudentApp;
