import { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchField from "./components/search-field/SearchField";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      students: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((student) =>
        this.setState(() => {
          return { students: student };
        })
      );
  }

  handleSearch = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { students, searchField } = this.state;
    const { handleSearch } = this;
    const filteredStudents = students.filter((student) => {
      return student.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Student Rolodex</h1>
        <SearchField
          onSearch={handleSearch}
          placeholder="Search Students"
          className="student-search-box"
        />
        <CardList students={filteredStudents} />
      </div>
    );
  }
}

export default App;
