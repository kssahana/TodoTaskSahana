import React,{ useState} from "react";
import "./App.css"

function App(){
  const [list,setList]=useState([]);
  const [input,setInput]=useState("");

  const addTodo=(todo)=>{
    const newTodo={
      id: Math.random(),
      todo: todo,
    };
    //add the todo to the list
    setList([...list,newTodo]);    

    //clear input box
    setInput("");
  };
  const removeTodo=(id)=>{
    const newList=list.filter((todo)=>todo.id!==id);

    setList(newList);
  };
  return(
    <div>
      <center><h3 >Task Details</h3></center>
      <br/>
      <h3>Task Title</h3>
      <h1>NFT Web App Prototype</h1>
      <h3>Description</h3>
      <p>Last year was a fantastic year for NFTs,with the market reaching a $40 billion valuation for the first time. In addition, more than $10 billion worth of NFTs are now sold every week-with NFT..</p>
      <h3>Task List</h3>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      
      <button onClick={()=>addTodo(input)}>Add Task</button>
      
      <ul>
        {list.map((todo)=>
        <li key={todo.id}>
          {todo.todo}
          
          <button onClick={()=>removeTodo(todo.id)}>&times;
          </button>
        </li>)}
      </ul>
    </div>
  )
}

export default App;
