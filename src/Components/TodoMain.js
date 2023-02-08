import { useEffect, useState } from 'react';
import './Style.css';
import Form from './Form';
import Header from './Header';
import TodoList from './TodoList';

const TodoMain=()=> {
  const initialState=JSON.parse(localStorage.getItem("todos"))||[];
  const[input,setInput]=useState("");
  const[todos,setTodos]=useState(initialState);
  const[editTodo,setEditTodo]=useState(null);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  return (
    <div className='container' >
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div >
          <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        
        </div>
        <div  style={{textAlign:"center",color:"white"}}>
        {  todos && todos.length ? '' : 'No Tasks...'}
          <TodoList 
          todos={todos} 
          setTodos={setTodos} 
          setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  )
}

export default TodoMain
