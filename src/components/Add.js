import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import {Modal, Button, Form} from 'react-bootstrap';
class Add extends Component {
  constructor(props) {
    super(props);
    this.usersList = {
      modal:{
        show: false,
      },
      addUserForm:{
        firstName: "",
        lastName: "",
      }
    };
    this.state = this.usersList;
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      addUserForm:{...this.state.addUserForm, [name]: value}
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName } = this.state.addUserForm;
    this.props.AddNote( { firstName, lastName, id: uuid() });
    this.setState(this.usersList);
  }

  render() {

    const handleClose = () => this.setState({modal:{ show: false }});
    const handleShow = () => this.setState({modal:{ show: true }});
    return (
      <>
        <Button className="nextButton" onClick={handleShow}>
          add
        </Button>
        <Modal show={this.state.modal.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add list</Modal.Title>
          </Modal.Header>
          <Modal.Body>Enter name and nickname!</Modal.Body>
          <Modal.Footer>

            <Form className="w-100" onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>First name</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="First name"
                name="firstName"
                value={this.state.addUserForm.firstName}
                onChange={this.handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formUserName">
                <Form.Label>Last name</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Last name"
                name="lastName"
                value={this.state.addUserForm.lastName}
                onChange={this.handleChange} />
              </Form.Group>
              <Button className="mx-1" variant="primary" type="submit">
                Submit
              </Button>
              <Button className="mx-1" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            </Form>

          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Add;