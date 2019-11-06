import React,{ useReducer,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {reducer, initialState} from "./reducers/reducer"

function App() {
  const [item,setItem] = useState("")
  const [state,dispatch] = useReducer(reducer,initialState)
const handleChanges = e => {
  setItem(e.target.value)
}
const addTodo = e => {
  dispatch({type:"ADD_TODO",
  newItem:{
    item:item,
    id:Date.now(),
    completed:false, 
    due_by: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+1).toDateString(),
    due:false}
  })
  e.preventDefault()
  console.log(state)
}
  return (<div>
    <form onSubmit={addTodo}>
      <button>submitTodo</button>
      <input onChange={handleChanges} value={item} />
      <div>
      {state.list.map(i => <p className={i.due ? "due" : i.completed ? "completed" : "" } key ={i.id} onMouseLeave={() => 
        dispatch({type:"OVERDUE",payload:new Date().toDateString})} onClick={() => dispatch({ type: "TOGGLE_COMPLETED", payload: i.id })}>
        {i.item}
        </p>)}
      </div>
    </form>
    <div>
       <button onClick={() => dispatch({type:"CLEAR_COMPLETED"})}>clear completed</button>
    </div>
    </div>
  );
  console.log(state)
}

export default App;
