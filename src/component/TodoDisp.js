import React, {useContext} from 'react';
import AlertDialog from './Modal'
import { MyContext } from './Todo';

export default function TodoDisp() {
  
  const {todos, toggleComplete, submitEdits, deleteTodo}=useContext(MyContext)
  const [isModal, setIsModal] = React.useState(false);
  const [editingText, setEditingText] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);

  const handleSubmitEdits = ((id, editingText)=>{
        submitEdits(id, editingText);
        setTodoEditing(null);
    })
    const handleDeleteTodo = (id) =>{
        deleteTodo(id);
        setIsModal(false);
    }
    
  return (
    <div>
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
           defaultValue={todo.text}
          onChange={(e) => setEditingText(e.target.value)}
          />) : 
          (<p className={todo.isDone && "taskStrike"}>{todo.text}</p>)
          
          }
        
        <div>
          {todo.id === todoEditing ? (<img src={require('../add.png')} onClick ={() => handleSubmitEdits(todo.id, editingText)} />) :
           (<img src={require('../pencil.png')} onClick ={() => setTodoEditing(todo.id)}/>)}&nbsp;
           <img src={require('../remove.png')} onClick={() => setIsModal(true)} />
            <AlertDialog
              handleRemove={() => handleDeleteTodo(todo.id)}
              isOpen={isModal}
              handleClose={() => setIsModal(false)}
            />
           </div>
      </div>
    </div>
  ))}
    </div>
  )
}



