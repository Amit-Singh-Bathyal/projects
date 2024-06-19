import React from "react";
import Navbar from "./Components/Navbar"
import { useState,useEffect } from "react"

import axios from "axios";

import { v4 as uuidv4 } from 'uuid';
uuidv4();

function App() {


 const [todo,setTodo] = useState("")
 const [todos,setTodos] = useState([])


  const handleDelete = (e,id) =>{
    let newtodos = todos.filter(item=>{
      return item.id!==id;
    }); 
    setTodos(newtodos) 
    save()

  }

  const handleAdd = () =>{
  setTodos([...todos, {id: uuidv4(), todo, isCompleted:false}]);
  setTodo("");
  console.log(todos)
  save()
  }

  const handlechange = (e) =>{
    setTodo(e.target.value)
    }

const handleCheckbox = (e) => { 
 let id= e.target.name;
 let index= todos.findIndex(item=>{
  return item.id===id;
 })
let newtodos=[...todos];
newtodos[index].isCompleted=!newtodos[index].isCompleted;
setTodos(newtodos)
save()
}

const handleEdit = (e, id)=>{ 
  let t = todos.filter(i=>i.id === id) 
  setTodo(t[0].todo)
  let newTodos = todos.filter(item=>{
    return item.id!==id
  }); 
  setTodos(newTodos) 
  save()
}

useEffect(() => {
  let todoString = localStorage.getItem("todos")
  if(todoString){
    let todos = JSON.parse(localStorage.getItem("todos")) 
    setTodos(todos)
  }
}, [])


const save = (params) => {
  localStorage.setItem("todos", JSON.stringify(todos))
}


  return (
    <>
    <Navbar/>
  
  <div className='container bg-orange-400 my-5 mx-auto p-3 rounded-2xl w-9/12 min-h-[70vh] ' >
  <div className="add">
    <h2 className='text-lg font-bold'>Add Todo</h2>
    <input onChange={handlechange} value={todo} type="text"  className='rounded-xl w-1/2 my-1' />
    <button onClick={handleAdd} className='bg-gray-300 rounded-xl px-1.5 mx-2  hover:text-lg ' >Add</button>
  </div>

  <h2 className='text-lg font-bold'>Your Todos</h2>
   
  <div className="todos my-2 "> 

  {todos.map(item =>{ 
  return <div key={item.id} className="text flex w-1/4 my-1.5 justify-between gap-3">
  <input type="checkbox" onChange={handleCheckbox} name={item.id} value={item.isCompleted}  id="" />
  <div className={item.isCompleted?"line-through" :""}> {item.todo} </div>
  <div className="buttons  flex h-full">
  <button onClick={(e)=>{handleEdit(e, item.id)}} className='bg-gray-300 rounded-xl px-1.5 hover:text-lg mx-2 '> Edit </button>
  <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-gray-300 rounded-xl px-1.5 hover:text-lg mx-2'>Delete</button>
  </div>
  </div>
})}
  </div>
 </div>
    </>
  )
}

export default App
