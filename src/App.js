import './App.css';
import { useState } from 'react'
import  TaskInput  from './components/TaskInput'
import  TaskList  from './components/TaskList'
import  TaskDoneList  from './components/TaskDoneList'

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isClickeditButton, setisClickeditButton] = useState(false);
  const [editIdentifier, setEditIdentifier] = useState([]);
  

  const addTasksList = () => {
    const task = {
      taskTitle: title,
      taskDescription: description,
      isDone: false
    }
    setTasks((prev)=> [...prev, task]);
    setTitle("");
    setDescription("");

  }

  const removeList = (deleteIndex) => {
    const filtered = tasks.filter((tasks,index) => index !== deleteIndex)
    setTasks(filtered);
 
  }

  const editList = (editId) => {
      setisClickeditButton(true)
      setEditIdentifier(editId);
  }

    const cancelButton = () => {
      setisClickeditButton(false)
    }

    const updateTask= () => {
      const updateTask = tasks.map((tasks,index) => editIdentifier === index ? {taskTitle:title,taskDescription:description } : tasks);
      setTasks(updateTask);
    }

    const doneButton = (markDone) => {
      setTasks(tasks[0].isDone=false)
    }

  // useEffect(() => {
  //   console.log(taskSelector)
  // },[taskSelector])

  return(

    <div style={{
      backgroundColor:'#252525', 
      height:'100vh', 
      widht:'100vh', 
      display: 'flex',
      gap:5
         }} 
    > 
        <div 
        style={{
          backgroundColor:'#FCFCF7', 
          height :'100%', 
          width: '28%'
        }}
        > 
          <TaskList 
            tasks={tasks}
            removeList={removeList}
            editList={editList}
            doneButton={doneButton}
          />

        </div>
        <div 
          style={{
            backgroundColor:'#FCFCF7',
            height :'100%', 
            width: '60%', 
            display:'flex', 
            justifyContent:'center', 
            alignItems:'center', 
            flexDirection:'column', 
            gap:10
          }}
        >
          <TaskInput
            title={title} 
            description={description} 
            isClickeditButton={isClickeditButton} 
            cancelButton={cancelButton} 
            addTasksList={addTasksList} 
            setTitle={setTitle} 
            setDescription={setDescription} 
            updateTask={updateTask}
          
          />
        </div>
        
        <div style={{
          backgroundColor:'#FCFCF7',
          height :'100%', 
          width: '12%', 
        }}>
              <TaskDoneList title={title}/>
        </div>
    </div>

  )

}

export default App;

