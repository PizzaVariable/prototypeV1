import React from "react";
import Card from "react-bootstrap/card";
import { GiSpartanHelmet } from "react-icons/gi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";

class Adventurefour extends React.Component {
  state = {
    username: "Prince Yamato Take",
    story: `Work sucks`,
    wordIterator: 0
  };

  componentDidMount() {
    let newArr = this.state.story.split(" ");
    let finArr = newArr.map(el => (el = el + " "));
    this.setState({ story: finArr });
    this.incrementIterator();
  }

  incrementIterator() {
    if (this.state.wordIterator < this.state.story.length + 1) {
      setTimeout(() => {
        this.setState({ wordIterator: this.state.wordIterator + 1 });
        this.incrementIterator();
      }, 132);
      this.setState({
        currentWords: this.state.story.slice(0, this.state.wordIterator)
      });
    }
  }

  render() {
    return (
      <Container as="main">
        <Row className="justify-content-center m-5">
          <Card border="warning" style={{ width: "60rem" }}>
            <Card.Header>
              <GiSpartanHelmet />
              {this.state.username}
            </Card.Header>
            <Card.Body>
              <Card.Title>USERNAME OR STORYTITLE</Card.Title>
              <Card.Text>{this.state.currentWords}</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

export default Adventurefour;