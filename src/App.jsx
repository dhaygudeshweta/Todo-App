import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task,setTask]=useState('');
  const [tasks,setTasks]=useState([]);
  const [editIndex,setEditIndex]=useState(null);
  const handleTask=(value)=>{

    setTask(value);
    
  }
  const addTask=(e)=>{
    // e.preventDefault();
    // setTasks([...tasks,{text:task,completed:false}]);
    // setTask('');
    // console.log(task);
    if(task.trim()==="")return;
    if(editIndex!==null){
      const updatedTasks=[...tasks];
      updatedTasks[editIndex].text=task;
      setTasks(updatedTasks);
      setEditIndex(null);}else{
        setTasks([...tasks,{text:task,completed:false}]);
      }
      setTask("");
    };

  
  const deleteTask=(indexToDelete)=>{
    const newTasks=tasks.filter((t,index)=>index!==indexToDelete);
    setTasks(newTasks);
  };

  const toggleComplete=(index)=>{
    const newTasks=[...tasks];
    newTasks[index].completed=!newTasks[index].completed;
    setTasks(newTasks);
  };
  const editTask=(index)=>{
    setTask(tasks[index].text);
    setEditIndex(index);
  };
  


  return (
    
    
    <div className='container'>
      <h1>To do app</h1>

      <input  value={task}onChange={(event)=>handleTask(event.target.value)} type='text' placeholder='enter your tasks'/> 
      <button onClick={addTask}>Add Task</button>
      <ul>{
        tasks.map((t,index)=>
        (<li key={index} style={{textDecoration:t.completed? "line-through":"none",cursor:"pointer"}}><span>{t.text}</span>
        <button onClick={()=>editTask(index)}>EditTask</button>
        <button onClick={()=> deleteTask(index)}>Delete</button>
        <button onClick={()=>
        toggleComplete(index)}>Complete</button>
        </li>))
        
        
}</ul>
<button onClick={()=>
        toggleComplete(index)}>Complete</button>
      
      
        </div>
        
   
  );
}

export default App
