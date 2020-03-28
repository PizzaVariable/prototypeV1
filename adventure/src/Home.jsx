import * as React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
    
    class Home extends React.Component {
         
              render() {
                    return (
                          <Form className="form-group p-3 shadow-lrg">
                          <Form.Label>STORY NAME</Form.Label>
                          <Form.Control
                            //value={this.state.username}
                            //onChange={this.handleUsernameChange}
                            placeholder="Charcter Name"
                            type="text"
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


export default Home;