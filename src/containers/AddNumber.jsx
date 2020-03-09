import { connect } from "react-redux";
import AddNumber from "../components/AddNumber";

function mapReduxDispathToReactProps(dispatch) {
  const btnClick = (size) => {
    dispatch({
      type: 'INCREMENT',
      size: size
    });
  };
  return {
    onClick: btnClick
  }
}
export default connect(null, mapReduxDispathToReactProps)(AddNumber);

/*
export default class extends Component {
  render() {
    const btnClick = (size) => {
      store.dispatch({
        type: 'INCREMENT',
        size: size
      });
    };
    return <AddNumber onClick={btnClick}></AddNumber>;
  }
}
*/
