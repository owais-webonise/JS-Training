import { connect } from 'react-redux';
import { store } from '../route.js'

class Home extends React.Component {
  render() {
    var finalText,finalStatus;
      for(let i=0; i<store.getState().todos.length; i++) {
        if(store.getState().todos[i].id === this.props.routeParams.value) {
          finalText = store.getState().todos[i].text;
          finalStatus = store.getState().todos[i].status;
        }
      }
      return (
        <div>
          Task: {finalText}
        </div>
      );
  }
}

export default connect()(Home);
