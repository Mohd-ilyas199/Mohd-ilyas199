import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import "./Placements2.css";
// import Marquee from react-fast-Marquee;

export const Placement2 = () => {
  return (
    <div>
      <Container>
        <h1>
          <b>Placements</b>
        </h1>
        {/* <Marquee> */}
        <Row>
          <Col md={4}>
            <div className="card1">
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src="aa.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col md={4}>
            <div className="card1">
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src="aa.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={4}>
            <div className="card1">
              <Card style={{ width: "14rem" }}>
                <Card.Img variant="top" src="aa.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        {/* </Marquee> */}
      </Container>
    </div>
  );
};
