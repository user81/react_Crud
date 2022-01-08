import React, { Component } from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.usersList = {
      modal:{
        show: false,
      },
      addUserForm:{
        firstName: '',
        lastName:  '',
      }
    };
    this.state = this.usersList;
    console.log(props);
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      const user = this.props.getUserId(this.props.id);
      this.setState({
        addUserForm: {
          firstName: user.firstName,
          lastName: user.lastName,
        },
      })
    }
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
    this.props.updateNote(this.props.id, { firstName, lastName, id: this.props.id });
    this.props.onClose();
  }

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onClose}>
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
              <Button className="mx-1" variant="secondary" onClick={this.props.onClose}>
              Close
            </Button>
            </Form>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Edit;