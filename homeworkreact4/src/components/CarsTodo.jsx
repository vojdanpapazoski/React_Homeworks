export const CarsTodo = ({ listOfTodos, markTodoAsDone, isOwned }) => {
  return (
    <div>
      <ol>
        {listOfTodos.map((todo, i) => {
          return (
            <li key={i}>
              <span>{todo.text}</span>
              <button onClick={() => markTodoAsDone(todo)}>
                {isOwned ? "Sell Car" : "Buy Car"}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
