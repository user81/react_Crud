
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import Add from './components/Add';
import {Container, Col, Row} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      users: [
        { id: '1640936678680', firstName : 'Tania', lastName: 'floppydiskette' },
        { id: '1640936678681', firstName : 'Timm', lastName: 'zeitgeist' },
        { id: '1640936678682', firstName : 'Craig', lastName: 'siliconeidolon' },
        { id: '1640936678683', firstName : 'Papa', lastName: 'tomi' },
      ]
    };
    this.state = this.initialState;
  }

  AddNote = user => {
    const users = this.state.users;
    this.setState({ users: [...users, user] });
  };

  deleteNote = userId => {
    const users = this.state.users;
    this.setState({ users: users.filter(user => user.id !== userId), });
  };

  updateNote = (userId, updatedUser) => {
    const users = this.state.users;
    this.setState({ users: users.map(user => (user.id === userId ? updatedUser : user)), });
  };

  getUserId = userId => {
    const users = this.state.users;
    const uobj = users.filter(user => user.id === userId);
    return uobj[0];
  };

  render() {

    return (
      <div className="App">
        <Container>
          <Row className="my-3">
            <Col sm="1">
              <Add
              AddNote={this.AddNote}
              />
            </Col>
          </Row>
          
          <List
            users={this.state.users}
            deleteNote={this.deleteNote}
            updateNote={this.updateNote}
            getUserId={this.getUserId}
          />
        </Container >
      </div>
    );
  }
}

export default App;
