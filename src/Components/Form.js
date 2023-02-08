// import { upload } from '@testing-library/user-event/dist/upload';
import React from 'react';
import {v4 as uuidv4} from "uuid";
import { useEffect } from "react";


const Form=({input,setInput,todos,setTodos ,editTodo,setEditTodo})=> {
    
    const updateTodo=(title,id,completed)=>{
        const newTodo=todos.map((todo)=>
        todo.id===id?{title,id, completed}: todo
        );
        setTodos(newTodo);
        setEditTodo("");
    }
    useEffect(()=>{
        if (editTodo){
            setInput(editTodo.title);
        }else{
            setInput("");
        } 
    },[setInput,editTodo]);

    const onInputChange=(event)=>{
        setInput(event.target.value);
    };
    const onFormSubmit=(event)=>{
        event.preventDefault();
        if (!editTodo){
            setTodos([...todos,{id:uuidv4(),title:input,completed:false}]);
            setInput(""); 
        }else{
            updateTodo(input, editTodo.id,editTodo.completed);
        }
    };
    return(
    <div className='list-items' >
      <form   onSubmit={onFormSubmit}>
        <input type="text" placeholder='Enter a Todo.....' className='task-input' value={input} onChange={onInputChange} />
        <button className='button-add' type='submit'>{editTodo? "Update":"Add"}</button>
      </form>
    </div>
  );
};

export default Form;
