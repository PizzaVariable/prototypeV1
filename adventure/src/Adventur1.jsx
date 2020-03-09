import React from "react";
import Card from "react-bootstrap/card";
import { GiSpartanHelmet } from "react-icons/gi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
let arr = [];
class Adventure extends React.Component {
  state = {
    username: "Prince Yamato Take",
    story: `The insignia of the great Japanese Empire is composed of three treasures which have been considered sacred, and guarded with
        jealous care from time immemorial. These are the Yatano-no-Kagami or the Mirror of Yata, the Yasakami-no-Magatama or the Jewel of
        Yasakami, and the Murakumo-no-Tsurugi or the Sword of Murakumo.`
  };
  componentDidMount() {
    setTimeout(this.setState(), 3000);
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
              <Card.Text>{this.state.story}</Card.Text>
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
