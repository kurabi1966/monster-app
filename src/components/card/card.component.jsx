import "./card.styles.css";

// class Card extends Component {
//   render() {
//     const { name, id, email } = this.props.item;
//     const { set } = this.props;
//     return (
//       <div className="card-container">
//         <img
//           alt={`Monster ${name}`}
//           src={`https://robohash.org/${id}?set=set${set}`}
//         />
//         <h1 className="monster-name">{name}</h1>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

const Card = ({ item, set }) => {
  const { name, id, email } = item;
  return (
    <div className="card-container">
      <img
        alt={`Monster ${name}`}
        src={`https://robohash.org/${id}?set=set${set}`}
      />
      <h1 className="monster-name">{name}</h1>
      <p>{email}</p>
    </div>
  );
};
export default Card;
