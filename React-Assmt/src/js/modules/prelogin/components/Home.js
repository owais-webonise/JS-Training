class Home extends React.Component {
    render() {
      console.log(this.props.location.query.param1)
        return (
          <div> Name:
          {this.props.location.query.param1}
          {this.props.location.query.param2}
            <th> English </th>
            <th> Hindi </th>
            <th> Mathematics </th>
            <th> Total</th>
            <th> Percentage </th>
            <div>
              <td> {this.props.location.query.param3} </td>
              <td> {this.props.location.query.param4} </td>
              <td> {this.props.location.query.param5} </td>
              <td> {this.props.location.query.param6} </td>
              <td> {this.props.location.query.param7} </td>
            </div>
          </div>
        );
    }
}

export default Home;
