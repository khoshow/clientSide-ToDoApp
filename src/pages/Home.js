import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Addtask from '../Components/Addtask'
import Todolist from '../Components/Todolist'
import Updatetask from '../Components/Updatetask'
import UpdateTask2 from '../Components/UpdateTask2'
import FormModal from '../Components/FormModal'
import { Link } from "react-router-dom"




function App() {
  const [todolist, setTodolist] = useState([])
  const [tasktoUpdate, setTasktoUpdate] = useState({})
  const [showPopup, setShowPopup] = useState(false)
  const [complete, setComplete] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:8000/api/tasks').then(res => {
      setTodolist(res.data)

    }).then(() => {
      const completedTasks = todolist.filter((item => item.status === 'Completed'))
      setComplete(completedTasks)
    }).catch(err => console.log(err));
  }, [todolist])


  const addTask = newTask => {
    setTodolist([...todolist, newTask])
  }

  const taskComplete = task => {
    const newList = [...todolist]
    newList.forEach(item => {
      if (item._id === task._id) {
        item.isComplete = task.isComplete
      }
    })
    setTodolist(newList)
  }
  const removeTask = task => {
    const newList = todolist.filter(item => !(item._id === task._id))
    setTodolist(newList)
  }

  const updatetask = task => {
    const newList = [...todolist]
    newList.forEach(item => {
      if (item._id === task._id) {
        item.todo = task.todo
      }
    })
    setTodolist(newList)
  }


  function completed() {

    const completedTasks = todolist.filter((item => item.status === 'Completed'))
    return completedTasks.length
  }


  const pending = () => {
    const pendingTasks = todolist.filter((item => item.status === 'Pending'))
    return pendingTasks.length
  }
  const onhold = () => {
    const onholdTasks = todolist.filter((item => item.status === 'On Hold'))
    return onholdTasks.length
  }

  return (
    <div>
      <div className='container'>
        <div className='sideNav' ><img src="./images/dodor.jpg" style={{ width: "100px", height: "100px", borderRadius: "50%",  }} />
          <p style={{ textAlign: "center" }}>Albus Dumbledore</p>

          <div style={{ textAlign: 'center' }}>
            <Link to="/">Tasks</Link>
            <br />
            <Link to="/types">Types</Link>
          </div>
          <div style={{marginTop:"100px"}}>    <p>Dumbledore To-Do List By Khoshow</p></div>
        </div>
        <div className='content'>
    
          <div className='taskContainer'>
          
            <div className='taskStatus' >
              <div className='inside-status'><h3>{todolist.length}</h3><h4>Total Tasks</h4></div>
            </div>
            <div className='taskStatus'> <div className='inside-status'><h3>{completed()}</h3><h4>Tasks Completed</h4></div></div>
            <div className='taskStatus'> <div className='inside-status'><h3>{pending()}</h3><h4>Tasks Pending</h4></div></div>
            <div className='taskStatus'> <div className='inside-status'><h3>{onhold()}</h3><h4>Tasks on Hold</h4></div></div>
          </div>
          <br></br>
          <div style={{ textAlign: "center" }}>   <Addtask addTask={addTask} /></div>

          <br></br>
          <Todolist todolist={todolist} taskComplete={taskComplete} removeTask={removeTask} tasktoUpdate={task => setTasktoUpdate(task)} showPopup={() => setShowPopup(!showPopup)} />
          {/* {showPopup && <Updatetask task = {tasktoUpdate} updatetask = {updatetask} removePopup = {() => setShowPopup(!showPopup)}/>} */}
          {/* <UpdateTask2 task={tasktoUpdate} updatetask={updatetask} removePopup={() => setShowPopup(!showPopup)} /> */}
         
        </div>

      </div>
    </div>
  )
}

export default App
