import React from "react";
import Card from "react-bootstrap/card";
import { GiSpartanHelmet } from "react-icons/gi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";

class Adventure extends React.Component {
  render() {
    return (
      <Container as="main">
        <Row className="justify-content-center mt-5">
          <Card border="success" style={{ hiegth: "50em", width: "60rem" }}>
            <Card.Header>
              <GiSpartanHelmet />
              USERNAME
            </Card.Header>
            <Card.Body>
              <Card.Title>USERNAME OR STORYTITLE</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

export default Adventure;

//GiAttachedShield
//GiAncientSword
//GiSpartanHelmet
//GiSpikedDragonHead
