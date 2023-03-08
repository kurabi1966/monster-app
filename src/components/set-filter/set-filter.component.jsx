import "./set-filter.styles.css";

// class SetFilter extends Component {
//   render() {
//     return (
//       <select className="set-filter" onChange={this.props.onChangeHandler}>
//         <option value="1">Set 1</option>
//         <option value="2">Set 2</option>
//         <option value="3">Set 3</option>
//         <option value="4">Set 4</option>
//         <option value="5">Set 5</option>
//       </select>
//     );
//   }
// }

const SetFilter = ({ onChangeHandler }) => {
  return (
    <select className="set-filter" onChange={onChangeHandler}>
      <option value="1">Set 1</option>
      <option value="2">Set 2</option>
      <option value="3">Set 3</option>
      <option value="4">Set 4</option>
      <option value="5">Set 5</option>
    </select>
  );
};
export default SetFilter;
