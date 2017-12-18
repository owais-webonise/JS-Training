import React, {Component} from 'react';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allResults: this.props.allResults.results,
      searchResults: this.props.searchResults
    }
    this._searchList = this._searchList.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      allResults:newProps.allResults,
      searchResults: newProps.searchResults
    });
  }

  _searchList(event) {
    var updatedResults = Object.assign([],this.state.allResults);
    var searchKeyword = event.target.value.toUpperCase();
    updatedResults = updatedResults.filter(function (item) {
      return (item.firstName.toUpperCase().indexOf(searchKeyword) > -1 || item.lastName.toUpperCase().indexOf(searchKeyword) > -1);
    });
    this.props.handleSearch(updatedResults);
  }

  render() {
    return (
      <input type="text" onChange={this._searchList}
      placeholder="Search Student" />
    );
  }
};

export default Search;
