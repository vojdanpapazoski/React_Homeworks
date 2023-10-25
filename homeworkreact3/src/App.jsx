import "./css/App.css";
import { Students } from "./components/students";
import { Semester } from "./components/semester";

function App() {
  

  let students = 
  [
    { name: "John", surname: "Doe", indexnumber: 993456 },
    { name: "Alice", surname: "Smith", indexnumber: 205567},
    { name: "Bob", surname: "Johnson", indexnumber: 349670},
    { name: "Eva", surname: "Williams", indexnumber: 456719},
    { name: "Michael", surname: "Brown", indexnumber: 567890},
    { name: "Sarah", surname: "Lee", indexnumber: 678951},
    { name: "David", surname: "Clark", indexnumber: 709012}
  ]
  
  let semesterSummer = {
    semvalue: "This is Summer semester at SEMOS JS Academy"
  }

  let semesterWinter = {
    semvalue: "This is Winter semester at SEMOS JS Academy"
  }



  return (
    <div className="App">
      <Students values = {students} />
      <Semester semesterSummer={semesterSummer} semesterWinter={semesterWinter} showSemester={1} />
      <Semester semesterWinter={semesterWinter} />


</div>
 );
}

export default App;

