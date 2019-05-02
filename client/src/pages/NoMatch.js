// importing react & components 
import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

// function setting up the catch-all page in case a user tries to navigate somehwere using the url that is not an actual page. displays the message on line 12 and 15 in a jumbotron
function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
