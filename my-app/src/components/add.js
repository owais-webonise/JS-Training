import React, { Component } from 'react';

class Add extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        items : this.props.items
      }
      this._addList = this._addList.bind(this);
  }

  componentWillUpdate() {
    console.log("Received");
  }

  componentDidUpdate() {
    console.log("After update");
  }

  componentWillReceiveProps(newProps) {
    if(this.props.items !== newProps.items) {
      this.setState({
        items: newProps.items
      });
    }
  }

  _addList(e) {
      e.preventDefault();
      var itemList = Object.assign([], this.state.items);
      if(this._inputValue.value) {
        itemList.push(this._inputValue.value);
        this._inputValue.value= "";
      }
      this.props.handleClick(itemList);
  }

  render() {
    return (
      <div className = "App">
          <h1>To Do List:</h1>
          <input ref={(a) => this._inputValue = a}
            placeholder="enter task" />
          <button type="submit" onClick={this._addList}>Add</button>
      </div>
    );
  }

};

Add.defaultProps = {
  items: []
}

export default Add;
