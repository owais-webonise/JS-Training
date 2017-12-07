import React, { Component } from 'react';
import Add from './components/add.js'
import Search from './components/search.js'

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchitems : []
    };
  }

  deleteElement(itemIndex) {
    var newArray = this.state.items;
    newArray.splice(itemIndex, 1);
    this.setState({items : newArray});
  }

  editElement(key,event) {
    var newList = Object.assign([], this.state.items);
    var newValue =  event.currentTarget.previousElementSibling.value;
    newList.map( (value,index)=>{
        if(key === index){
          newList[index]=newValue;
        }
    });
    this.setState({items : newList});
  }

  addMe(incomingaddValue) {
    this.setState({
      items: incomingaddValue
    })
  }

  searchMe(incomingsearchValue) {
    this.setState({
      searchitems: incomingsearchValue
    })
  }

  render() {
    return (
      <div className="App">
          <form>
            <Add items={this.state.items} handleClick = {this.addMe.bind(this)} />
            <Search items={this.state.items}
              searchitems={this.state.searchitems}
              handleSearch = {this.searchMe.bind(this)} />
          </form>
         <ul>
           {
            this.state.items.map(function (value, key) {
              return(
                <li key= { key }>
                  {value}
                  <p onClick={this.deleteElement.bind(this,key)}>(-)</p>
                  <input type="text" ref={(b) => this._editValue = b} />
                  <p onClick={this.editElement.bind(this,key)}>(Edit)</p>
                </li>
              )
            }.bind(this))
           }
          </ul>
          <ul>
           {
              this.state.searchitems.map(function (value, key) {
              return <li key= { key }>{value}</li>
            })
          }
          </ul>
      </div>
    );
  }
};

export default TodoApp;
