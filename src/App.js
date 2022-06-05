import React from "react";
import "./App.css";


const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");


  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      isDone: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }
 
  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }
  const taskStrike = (e) => {
    
    e.target.classList.toggle('taskStrike');
  }

  return (
    <div id="main-body">
      <div id="todo-list">
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          /> 
          <button type="submit">+Add</button>
        </form>

         {todos.map((todo) => (
           <div key={todo.id} className="todo">
             <div className="todo-text">
              
               <input
                type="checkbox"
                id="completed"
                checked={todo.isDone}
                onChange={() => toggleComplete(todo.id)}
              />
             
          {todo.id === todoEditing ? (
              <input
               type="text"
              onChange={(e) => setEditingText(e.target.value)}
              />) : 
              (<p style={{cursor:'pointer'}} onClick={taskStrike}>{todo.text}</p>)
              
              }
            
            <div>
              {todo.id === todoEditing ? (<img src={require('./add.png')} onClick ={() => submitEdits(todo.id)} />) :
               (<img src={require('./pencil.png')} onClick ={() => setTodoEditing(todo.id)}/>)}&nbsp;
               <img src={require('./remove.png')} onClick ={() => deleteTodo(todo.id)} />
               </div>
          </div>
        </div>
      ))}
      </div>
    </div>  
  );
};

export default App;