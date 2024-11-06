import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      students: [
        {
          id: '101',
          name: "Saugat",
        },
        {
          id: '102',
          name: "Samarpan",
        },
        {
          id: '103',
          name: "Suman",
        },
      ],
    };
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
