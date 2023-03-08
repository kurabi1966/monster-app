import Card from "../card/card.component";
import "./card-list.styles.css";

// class CardList extends Component {
//   render() {
//     const { list, set } = this.props;
//     return (
//       <div className="card-list">
//         {list.map((item) => (
//           <Card key={item.id} item={item} set={set} />
//         ))}
//       </div>
//     );
//   }
// }

const CardList = ({ list, set }) => {
  return (
    <div className="card-list">
      {list.map((item) => (
        <Card key={item.id} item={item} set={set} />
      ))}
    </div>
  );
};
export default CardList;

/**
 *         // {filteredMonsters.map((monster) => {
        //   return (
        //     <div key={monster.id}>
        //       <h1>{monster.name}</h1>
        //     </div>
        //   );
        // })}
 */
