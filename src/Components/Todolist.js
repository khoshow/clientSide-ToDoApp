import './Todolist.css'
import React from 'react'
import CheckIcon from '@material-ui/icons/Check'
import EditIcon from '@material-ui/icons/Edit'
import CloseIcon from '@material-ui/icons/Close'
import axios from 'axios'
import Updatetask from './Updatetask'
import UpdateTask2 from './UpdateTask2'
import {Routes, Route, useNavigate} from 'react-router-dom';

function Todolist(props) {
    const navigate = useNavigate();
    const todolist = props.todolist.map((task, index) => {
     
        let formData ={
            taskTitle:""
        }
      
        const navigateToUpdate = () => {
            // 👇️ navigate to /contacts
            navigate(`/update/${task._id}`);
          };

        const taskComplete = task => {
            axios.put(`http://localhost:8000/api/tasks/${task._id}`, {
                _id: task._id,
                todo: task.todo,
                isComplete: !task.isComplete
            }).then(res => props.taskComplete(res.data)).catch(err => console.log(err))
        }
        const removeTask = id => {
            axios.delete(`http://localhost:8000/api/tasks/${id}`).then(res => props.removeTask(res.data)).catch(err => console.log(err))
        }
        return <tr className='trow' key={index}>        
          
                <td className='tdata'>{index +1}</td>
                <td className='tdata'>{task.taskTitle}</td>
                <td className='tdata'>{task.type}</td>
                <td className='tdata'>{task.description}</td>
                <td className='tdata'>{task.date}</td>
                <td className='tdata'>{task.status}</td>
             
                <td ><EditIcon className='edit' onClick={navigateToUpdate} />
                {/* <td><UpdateTask2 task={task} handleChange={handleInputData} onSubmit={handleSubmit}/> */}
                    <CloseIcon className='close' onClick={() => {
                        removeTask(task._id)
                    }} /></td>
            </tr>


            {/* </div> */}

        // </li>
    })

  


    return (
        <div className='tasklist'>
            <table>
                <tr className='trow'>
                    <th>Sl</th>
                    <th>Task Title</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Task Date</th>
                    <th>Status</th>
                    <th>Edit/Delete</th>
                </tr>
                <tbody>  {todolist}</tbody>

                {/* {serial}
                    {todoTitle}
                    {todoType}
                    {todoDescription}
                    {todoDate}
                    {todoStatus}
                    {todoEdit} */}


            </table>
            {/* <ul>
                {todolist}
            </ul> */}
        </div>
    )
}

export default Todolist
