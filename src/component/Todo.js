import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function Todo() {
    const [todos, setTodos] = React.useState([]);
    function submit(todo) {
    
      const newTodo = {
        id: new Date().getTime(),
        text: todo,
        isDone: false,
      };
      setTodos([...todos].concat(newTodo));
      
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
  
    function submitEdits(id, editingText) {
      const updatedTodos = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.text = editingText;
        }
        return todo;
      });
      setTodos(updatedTodos);
     
    }
   
  return (
    <div id="todo-list">
    <TodoForm submit={submit}/>
    <TodoList todos={todos} 
    toggleComplete={toggleComplete}
    submitEdits={submitEdits}
    deleteTodo={deleteTodo} />
  </div>
  )
}
