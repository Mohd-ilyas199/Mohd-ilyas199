import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import "../Components/logon.css";
import { Config } from "./Reducers/Configlogin";

const Logon = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isvalid, setIsvalid] = useState(true);
  const [issucces, setIsucces] = useState(false);
  const eleuser = useRef();
  const elepass = useRef();
  useEffect(() => {
    if (localStorage.getItem("Username")) {
      eleuser.current.value = localStorage.getItem("Username");
      elepass.current.focus();
    } else {
      eleuser.current.focus();
    }
  }, []);
  useEffect(() => {
    if (username.length >= 5 && password.length >= 6) {
      setIsvalid(false);
      if (
        Config.username === username.trim() &&
        Config.pass === password.trim()
      ) {
        setIsucces(true);
      }
    } else setIsvalid(true);
  }, [username, password]); //dependecy array of useEffect

  return (
    <div style={{ backgroundColor: "orange" }}>
      {issucces ? (
        <p>
          <mark>😍succesfully logged in😍</mark>
        </p>
      ) : (
        <Card className="card1">
          <img src="aa.jpg" alt="" />{" "}
          <Row>
            <Col md="10">
              <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                ref={eleuser}
                type="text"
                placeholder="user name"
                className="from1"
              ></Form.Control>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                ref={elepass}
                type="password"
                placeholder="password"
                className="from1"
              ></Form.Control>
              <br></br>
              <Button disabled={isvalid}>LOGIN</Button> &nbsp; &nbsp;{" "}
              <Button>CANCEL</Button>
            </Col>
          </Row>
          {!issucces && !isvalid && <p>please provide valid info...</p>}
        </Card>
      )}
    </div>
  );
};

export default Logon;
