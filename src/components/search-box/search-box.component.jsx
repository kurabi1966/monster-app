import "./search-box.styles.css";
// class SearchBox extends Component {
//   render() {
//     const { onChangeHandler, placeholder, className } = this.props;

//     return (
//       <input
//         className={className}
//         type="search"
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     );
//   }
// }

const SearchBox = (props) => {
  const { onChangeHandler, placeholder, className } = props;
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
