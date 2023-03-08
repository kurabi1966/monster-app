import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.component";
import SetFilter from "./components/set-filter/set-filter.component";
// Source of the users
// https://jsonplaceholder.typicode.com/users
class App extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      monsters: [],
      url: "https://jsonplaceholder.typicode.com/users",
      searchField: "",
      filterField: "1",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch(this.state.url)
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  onSerachChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  onFilterChange = (event) => {
    const filterField = event.target.value;
    this.setState(() => {
      return { filterField };
    });
  };
  render() {
    console.log("render");
    const { monsters, searchField, filterField } = this.state;
    const { onSerachChange, onFilterChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Application</h1>
        <SearchBox
          onChangeHandler={onSerachChange}
          placeholder="Search Monsters"
          className="search-box"
        />
        <SetFilter onChangeHandler={onFilterChange} />
        <CardList list={filteredMonsters} set={filterField} />
      </div>
    );
  }
}

export default App;
