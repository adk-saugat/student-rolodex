import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      students: [],
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
  
  render() {
    return (
      <div className="App">
        {this.state.students.map((student) => {
          return <h1 key={student.id}>{student.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
