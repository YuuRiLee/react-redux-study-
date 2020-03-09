import { connect } from "react-redux";
import AddNumber from "../components/AddNumber";

export default connect()(AddNumber);

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
