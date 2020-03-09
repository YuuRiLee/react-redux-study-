import { connect } from "react-redux";
import DisplayNumber from "../components/DisplayNumber";

function mapReduxStateToReactProps(reduxState) {
  /*
  store의 subscribe를 통해 redux의 변화가 일어났을 때 setState가 실행되면서 render가 실행돠는 역할
  아래와 같은 의미를 가짐
  state = { number: store.getState().number }

  store.subscribe(() => {
      this.setState({ number: store.getState().number });
    })

  number={this.state.number}
  */
  return {
    number: reduxState.number
  }
}
export default connect(mapReduxStateToReactProps)(DisplayNumber); // wrapping된 content가 return

// connect를 실행하면 자동으로 아래와 같은 container를 만들어줌
/*
export default class extends Component {
  state = { number: store.getState().number }
  constructor(props) {
    super(props);
    store.subscribe(() => {
      this.setState({ number: store.getState().number });
    })
  }
  render() {
    return <DisplayNumber number={this.state.number}></DisplayNumber>;
  }
}
*/
