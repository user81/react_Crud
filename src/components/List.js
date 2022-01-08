import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import {Table, Button} from 'react-bootstrap';
import Edit from './Edit';
class List extends Component {
  constructor(props) {
    super(props);
    this.modal = {
        show: false,
      id: '',
    };
    this.state = this.modal;
  }

  onClose = () => {
    this.setState({ show: false })
  }

  renderCars() {
    return this.props.users.map(string => {
      return (
        <tr key={uuid()}>
          <td>{string.id}</td>
          <td>{string.firstName}</td>
          <td>{string.lastName}</td>
          <td>
            <Button
              variant="primary"
              onClick={ () => this.setState({ show: true, id: string.id }) }
            >Edit</Button>
            {' '}
            <Button
              variant="danger"
              onClick={ () => this.props.deleteNote(string.id) }
            >Delete</Button>
            {' '}
          </td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div>
      <Edit
        updateNote ={this.props.updateNote}
        onClose={this.onClose}
        show={this.state.show}
        //id по которому мы кликнули
        id={this.state.id}
        //функция id который будет обрабатывать
        getUserId={this.props.getUserId}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Edit/delete</th>
          </tr>
        </thead>
        <tbody>
          {this.renderCars()}
        </tbody>
      </Table>
      </div>
    );
  }
}

export default List;