import './Addtask.css'
import React, { useState } from 'react'
import axios from 'axios'
import FormModal from "./FormModal"
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Routes, Route, useNavigate } from 'react-router-dom';

function Addtask(props) {

    const [formData, setFormData] = useState({
        taskTitle: "",
        description: "",
        date: "",
        type: "",
        status: ""
    })


    const navigate = useNavigate()

    const handleInputData = (input) => (e) => {
        const { value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [input]: value,
        }));
    };



    const addtask = () => {
        
                axios.post('http://localhost:8000/api/tasks', {
            // todo: task,
            // isComplete: false
            formData
        }).then(res => {
            setFormData({})
            reroute()
        }).catch(err => console.log(err))

    }

    const reroute = () => {
        navigate('/');
    }

    return (
        <div className='' style={{ margin: "0 auto" }}>
            <FormModal handleFormData={handleInputData}
                values={formData} handleSubmit={addtask} />
            {/* <input type='text' placeholder='Add Task . . .' value={task} onChange={event => Settask(event.target.value)} /> */}

        </div>
    )
}

export default Addtask
