import './Addtask.css'
import React, { useState } from 'react'
import axios from 'axios'
import FormModal from "./FormModal"
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TypeModal from "./TypeModal"
import {Routes, Route, useNavigate} from 'react-router-dom';

function AddType(props) {

    const [typeTitle, setTypeTitle] = useState('')
    const handleInputData = (e) => {
       
        
        setTypeTitle(e.target.value);
    };

    const navigate = useNavigate()
    const addType = () => {
       
        

        axios.post('http://localhost:8000/api/types', {           
            typeTitle
        }).then(res => {
            setTypeTitle('')
            reroute()
            
        }).catch(err => console.log(err))

    }

    const reroute =()=>{
        navigate(`/types`);
    }

    return <>

        <div className='' style={{ margin: "0 auto" }}>
            <TypeModal handleFormData={handleInputData}
                type={typeTitle} handleSubmit={addType} />
            {/* <input type='text' placeholder='Add Task . . .' value={task} onChange={event => Settask(event.target.value)} /> */}

        </div></>
}

export default AddType