import React, {Component} from 'react';
import { Link } from 'react-router';

export default  class AddRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:props.allResults.results
    }
  }
  render() {
    return(
      <Link to={"home/"+"1"} >
        <span>Id: {this.state.firstName}</span>
      </Link>
      )
  }

};
