import React, { Component } from 'react';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items : this.props.items,
      searchitems : this.props.searchitems
    }
    this._searchList = this._searchList.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      items:newProps.items,
      searchitems: newProps.searchitems
    });
  }

  _searchList(e) {
    e.preventDefault();
    var updatedList = Object.assign([], this.state.items);
    var searchKeyword = this.refs._inputSearch.value.toUpperCase();
    updatedList = updatedList.filter(function(item){
      return item.toUpperCase().indexOf(searchKeyword) > -1;
    });
    this.props.handleSearch(updatedList);
  }

  render() {
    return (
      <input type="text" onChange={this._searchList} ref="_inputSearch"
      placeholder="search task" />
    );
  }

};

Search.defaultProps = {
  items: [],
  searchitems: []
}

export default Search;
