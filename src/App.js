// import logo from './logo.svg';
// import './App.css';
import React,{useState} from "react";
import Todos from './Todos';
const App = () => {
  const [task,setTask]= useState("");
  const [todos,setTodos]= useState([]);
  const changeHandler = e =>{
    setTask(e.target.value)

  }
  const submitHandler = e =>{
   e.preventDefault();
   const newTodos =[...todos,task];
   setTodos(newTodos);
   setTask("");
  }
  const deleteHandler=(indexValue) =>{
    const newTodos = todos.filter((todo,index)=> index!==indexValue);
    setTodos(newTodos);
  } 
  return (
    <div>

      <center>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Todo management Appliction</h5>
        <form onSubmit={submitHandler}>
          <input type="text" name="task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
          <input type="submit" value="Add" name="Add"/>
        </form>
        <Todos todos={todos} deleteHandler={deleteHandler}/>
      </div>
      
      
    </div>
    </center>
    </div>
  );
}

export default App;
