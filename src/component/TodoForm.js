import React, {useEffect, useRef} from 'react';

export default function TodoForm(props) {
    const focusInput = useRef(); 
    useEffect(()=>{
        focusInput.current.focus();
    })
    const [todo, setTodo] = React.useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.submit(todo);
        setTodo('');
    }
  return (
    <div>
    <h1>Todo List</h1>
    <form>
      <input
        type="text"
        ref={focusInput}
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      /> 
      <button onClick={handleSubmit} type="submit">+Add</button>
    </form>
    </div>
  )
}
