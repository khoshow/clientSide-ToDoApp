import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import EditIcon from '@material-ui/icons/Edit'

function Example({ task, handleChange, onSubmit }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { taskTitle, description, type, status, date } = task
  
    
const [value, setValue] = useState('')

    const submitFormData = (e) => {
        e.preventDefault();
        onSubmit();
    };

    const handleChange2 =(e)=>{
        let value = e.target.value
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <EditIcon className='edit' />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={submitFormData}>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control value={task.taskTitle}
                                onChange={handleChange}
                                required />
                            <Form.Label>Task Type</Form.Label>
                            <Form.Select value={type}
                                onChange={handleChange("type")}
                                required>
                                <option value="Design">Design</option>
                                <option value="Meeting">Meeting</option>
                                <option value="UI/UX">UI/UX</option>
                                <option value="Client Meeting">Client Meeting</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Description</Form.Label>
                            <Form.Control value={description}
                                onChange={handleChange("description")}
                                required />
                            <Form.Label>Status</Form.Label>
                            <Form.Select value={status}
                                onChange={handleChange("status")}
                                required>
                                <option value="Completed">Select</option>
                                <option value="Completed">Completed</option>
                                <option value="Pending">Pending</option>
                                <option value="On Hold">On Hold</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label d>Date</Form.Label>
                            <Form.Control  type="date"
                                onChange={handleChange("date")}
                                require/>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form.Group>

                    </Form>

                </Modal.Body>

            </Modal>
        </>
    );
}

export default Example