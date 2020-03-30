import * as React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class Home extends React.Component {
  state = {
    username: ""
  };

  handleUsernameChange = e => this.setState({ username: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleNameSubmit({
      username: this.state.username
    });
    this.setState({
      username: ""
    });
  };

  render() {
    return (
      <Container as="main">
        <Card className="mt-3 justify-content-center">
          <Form className="form-group p-3 shadow-lrg">
            <Form.Label>STORY NAME</Form.Label>
            <Form.Control
              value={this.state.username}
              onChange={this.handleUsernameChange}
              placeholder="Charcter Name"
              type="text"
            />
            <Button
              variant="primary"
              onClick={this.handleSubmit}
              className="mt-3 d-flex align-item-center justify-content-center"
            >
              <span className="mx-1"></span>
              Create Charcter..
            </Button>
          </Form>
        </Card>
      </Container>
    );
  }
}

export default Home;
