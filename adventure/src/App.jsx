import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//import {BrowserRouter as Router, Link, Route, Switch} from "react-router "
import "./App.css";

class App extends React.Component {
  state={
    username:""
  }
  render() {
    return (
      <Form classname="form-group p-3 shadow-lrg">
      <Form.Label>Username</Form.Label>
      <Form.Control
        value={this.state.username}
        onChange={this.handleUsernameChange}
        type="text"
      />
      <Form.Label>Message</Form.Label>
      <br />
      <Form.Control
        as="textarea"
        value={this.state.message}
        onChange={this.handleMessageChange}
        rows={7}
      />
      <Button
        variant="primary"
        onClick={this.handleSubmit}
        className="mt-3 d-flex align-item-center justify-content-center"
      >
        
        <span className="mx-1"></span>
        Chirp It!
      </Button>
    </Form>
    );
  }
}

export default App;
