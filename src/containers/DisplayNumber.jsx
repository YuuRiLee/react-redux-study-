import { connect } from "react-redux";
import DisplayNumber from "../components/DisplayNumber";

export default connect()(DisplayNumber); // wrapping된 content가 return

// connect를 실행하면 자동으로 아래와 같은 처리를 해줌
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
