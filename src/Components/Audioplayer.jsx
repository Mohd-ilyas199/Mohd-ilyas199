import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Audioplayer = () => {
  const audio = new Audio("marfa.mp3.mp3");
  const handleaudioplayer = () => {
    audio.play();
  };
  const handleaudiopause = () => {
    audio.pause();
  };
  return (
    <div style={{ backgroundColor: "pink" }}>
      <Row>
        <Col></Col>
        <Col>
          <Button
            onClick={handleaudioplayer}
            style={{ height: "50px", width: "70px", margin: "30px" }}
          >
            play
          </Button>
        </Col>
        <Col>
          <Button
            onClick={handleaudiopause}
            style={{ height: "50px", width: "70px", margin: "30px" }}
          >
            pause
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Audioplayer;
