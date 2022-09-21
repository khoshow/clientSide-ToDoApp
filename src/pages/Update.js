import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Update.css'
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Update = (props) => {
    const navigate = useNavigate()
    const [task, setTask] = useState({})
    const [formData, setFormData] = useState({
        taskTitle: "",
        description: "",
        date: "",
        type: "",
        status: ""
    })
    let { slug } = useParams();




    useEffect(() => {
        axios.get(`http://localhost:8000/api/tasks/${slug}`).then(res => {
            setFormData(res.data)

        }).then(() => {

        }).catch(err => console.log(err));
    }, [])


    const handleFormData = (input) => (e) => {
        const { value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [input]: value,
        }));
    };

    const submitFormData = () => {
        axios.put(`http://localhost:8000/api/tasks/${slug}`, {
            formData
        }).then(res => props.taskComplete(res.data)).then(navigate('/')).catch(err => console.log(err))
    }




    return (
        <div class="container">
            <div class="content">
                <h3>Update Task</h3>
                <Form onSubmit={submitFormData}>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Task Title</Form.Label>
                        <Form.Control value={formData.taskTitle}
                            onChange={handleFormData("taskTitle")}
                            required />
                        <Form.Label>Task Type</Form.Label>
                        <Form.Select value={formData.type}
                            onChange={handleFormData("type")}
                            required >
                            <option value="Design">Design</option>
                            <option value="Meeting">Meeting</option>
                            <option value="UI/UX">UI/UX</option>
                            <option value="Client Meeting">Client Meeting</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={formData.description}
                            onChange={handleFormData("description")}
                            required />
                        <Form.Label>Status</Form.Label>
                        <Form.Select value={formData.status}
                            onChange={handleFormData("status")}
                            required >
                            <option value="Completed">Select</option>
                            <option value="Pending">Pending</option>
                            <option value="Pending">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="On Hold">Cancelled</option>
                            <option value="On Hold">On Hold</option>
                           
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control value={formData.date} type="date"
                            onChange={handleFormData("date")}
                            required />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>

                </Form>
            </div>
        </div>
    )
}

export default Update