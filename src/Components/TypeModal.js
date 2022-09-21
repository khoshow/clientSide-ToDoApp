import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function TypeModal({ handleSubmit, handleFormData, type }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const submitFormData = (e) => {
        e.preventDefault();
        handleSubmit();
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Task Type
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Task Type</Modal.Title>
                </Modal.Header>
                <br></br>
                <Modal.Body>
                    <Form onSubmit={submitFormData}>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Task Type</Form.Label>
                            <br></br>
                            <Form.Control value={type}
                                onChange={handleFormData}
                                required />
                                <br></br>
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default TypeModal