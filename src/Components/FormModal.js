import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Example({ handleSubmit, handleFormData, values }) {
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
        Add Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Task Title</Form.Label>
              <Form.Control value={values.taskTitle}
                onChange={handleFormData("taskTitle")}
                required />
              <Form.Label>Task Type</Form.Label>
              <Form.Select value={values.type}
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
              <Form.Control value={values.description}
                onChange={handleFormData("description")}
                required />
              <Form.Label>Status</Form.Label>
              <Form.Select value={values.status}
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
              <Form.Control value={values.date} type="date"
                onChange={handleFormData("date")}
                required />
              <Button variant="primary" type="submit" onClick={handleClose}>
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