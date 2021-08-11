import React from "react";
import { Row, Col } from "react-bootstrap";
import "../Components/parentpianomusic.css";
import Childpianomusic from "./Childpianomusic";

const ParentPianomusic = () => {
  return (
    <div>
      <Row>
        <Col xs="4">
          <h2>low</h2>
          <Childpianomusic />
        </Col>

        <Col xs="4">
          <h2>medium</h2>
          <Childpianomusic />
        </Col>
        <Col xs="4">
          <h2>high</h2>
          <Childpianomusic />
        </Col>
      </Row>
    </div>
  );
};

export default ParentPianomusic;
