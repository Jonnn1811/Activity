import './App.css';
import { useState } from 'react'

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isClickeditButton, setisClickeditButton] = useState(false);
  const [isCancelButton, setIsCancelButton] = useState(false)
  const [editIdentifier, setEditIdentifier] = useState([]);

  
  const addTasksList = () => {
    const task = {
      taskTitle: title,
      taskDescription: description
    }
    setTasks((prev)=> [...prev, task]);
  }

  const removeList = (deleteIndex) => {
    const filtered = tasks.filter((tasks,index) => index !== deleteIndex)
    setTasks(filtered);
  }

  const editList = (editId) => {
     // setisClickeditButton(editButton)
      setisClickeditButton(true)
      setEditIdentifier(editId);
  }

    const cancelButton = () => {
      setIsCancelButton(isCancelButton)
    }

    const updateTask= () => {
      const updateTask = tasks.map((tasks,index) => editIdentifier === index ? {taskTitle:title,taskDescription:description } : tasks);
      setTasks(updateTask);
    }

  // useEffect(() => {
  //   console.log(taskSelector)
  // },[taskSelector])

  return(
    <div style={{backgroundColor:'#252525', height:'100vh', widht:'100vh', display: 'flex',gap:5}} >
      <div style={{backgroundColor:'#FCFCF7', height :'100%', width: '20%'}}>
        { tasks.map((task,index) => 
        <div style={{border: 'solid', borderColor:'black', borderWidth:'1px', margin:'5px', }}>
          <p>{task.taskTitle}</p>
          <p>{task.taskDescription}</p>
          <button onClick={() => removeList(index)} >Delete</button>
          <button onClick={() => editList(index)}>Edit</button>
          <button>Done</button>
        </div>
        )}
      </div>
      <div style={{backgroundColor:'#FCFCF7', height :'100%', width: '80%', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', gap:10}}>
        <input onChange={(e) => setTitle(e.target.value)}
        placeholder=" Title" style={{width:'250px', height:'50px'}}
        />
        <textarea  onChange={(e) => setDescription(e.target.value)}
        placeholder=" Task Details" style={{width:'250px', height:'70px'}} />
        <div>
        {
          isClickeditButton ? <div>
          <button onClick={()=> updateTask()}>Update</button>
          <button onClick={cancelButton}>cancel</button>
           </div> : 
            <button 
              onClick={() => {
                addTasksList();
              }}
            >
              Add
           </button>
        }
        </div>
      </div>
    </div>
  )

}

export default App;

