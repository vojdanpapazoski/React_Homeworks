import './App.css';
import { useState, useEffect } from "react";
import { Input } from './components/Inputs';
import { CarsTodo } from './components/CarsTodo';

function App() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [ownedCars, setOwnedCars] = useState([]); 

  useEffect(() => {
    console.log(newTodo);
  }, [newTodo]);

  let addTodo = () => {
    let newTodoObject = {
      id: todos.length + 1,
      text: newTodo,
      done: false,
    };

    setTodos([...todos, newTodoObject]);
  };

  function markTodoAsDone(todo) {
    const updatedTodos = todos.map((item) =>
      item.id === todo.id
        ? { ...item, done: !item.done }
        : item
    );
    setTodos(updatedTodos);

    if (!todo.done) {
      setOwnedCars([...ownedCars, { ...todo, done: true }]);
    } else {
      const updatedOwnedCars = ownedCars.filter((car) => car.id !== todo.id);
      setOwnedCars(updatedOwnedCars);
    }
  }

  return (
    <div>
      <Input setUsers={setUsers} />
      <hr />
      <br />
      <br />
      <div className="cars-container">
      <input
        placeholder="Enter new Brand"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <br />
      <button onClick={addTodo}>Add Brand</button>
      <CarsTodo listOfTodos={todos} markTodoAsDone={markTodoAsDone} isOwned={false} />
      <hr />
      <h2>Owned Cars</h2>
      <CarsTodo listOfTodos={ownedCars} markTodoAsDone={markTodoAsDone} isOwned={true} />
    </div>
    </div>
  );
}

export default App;
