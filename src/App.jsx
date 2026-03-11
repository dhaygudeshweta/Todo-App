import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task,setTask]=useState('');
  const [tasks,setTasks]=useState([]);
  const handleTask=(value)=>{

    setTask(value);
    
  }
  const addTask=(e)=>{
    e.preventDefault();
    setTasks([...tasks,{text:task,completed:false}]);
    setTask('');
    console.log(task);

  }
  const deleteTask=(indexToDelete)=>{
    const newTasks=tasks.filter((t,index)=>index!==indexToDelete);
    setTasks(newTasks);
  };

  const toggleComplete=(index)=>{
    const newTasks=[...tasks];
    newTasks[index].completed=!newTasks[index].completed;
    setTasks(newTasks);
  };
  


  return (
    <form >
    
    <div className='container'>
      <h1>To do app</h1>

      <input  value={task}onChange={(event)=>handleTask(event.target.value)} type='text' placeholder='enter your tasks'/> 
      <button onClick={addTask}>Add Task</button>
      <ul>{
        tasks.map((t,index)=>(<li key={index} style={{textDecoration:t.comptoggleleted?"line-through":"none",cursor:"pointer",}}onClick={()=>toggleComplete(index)}>{t.text}<button onClick={()=>deleteTask(index)}>Delete</button></li>))
}</ul>
      
      
        </div>
        </form>
   
  );
}

export default App
