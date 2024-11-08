import CardList from "./components/card-list/CardList"
import SearchField from "./components/search-field/SearchField"
import "./App.css"
import { useState, useEffect } from "react"

function App() {
  const [searchValue, setSearchValue] = useState("")
  const [students, setStudents] = useState([])
  const [filteredStudents, setFilteredStudents] = useState(students)

  const handleSearch = (event) => {
    const searchField = event.target.value.toLowerCase()
    setSearchValue(searchField)
  }
  useEffect(() => {
    const newfilteredStudents = students.filter((student) => {
      return student.name.toLowerCase().includes(searchValue)
    })
    setFilteredStudents(newfilteredStudents)
  }, [students, searchValue])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((student) => setStudents(student))
  }, [])

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
  )
}
export default App
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       students: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((student) =>
//         this.setState(() => {
//           return { students: student };
//         })
//       );
//   }

//   handleSearch = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { students, searchField } = this.state;
//     const { handleSearch } = this;
//     const filteredStudents = students.filter((student) => {
//       return student.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Student Rolodex</h1>
//         <SearchField
//           onSearch={handleSearch}
//           placeholder="Search Students"
//           className="student-search-box"
//         />
//         <CardList students={filteredStudents} />
//       </div>
//     );
//   }
// }
