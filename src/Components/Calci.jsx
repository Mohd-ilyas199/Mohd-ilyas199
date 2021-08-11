import React, { useState, useEffect, useMemo } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import "./calci.css";

const Calci = () => {
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const [r, setR] = useState(0);
  const [si, setSi] = useState(0);
  const [rp, setrRP] = useState(0);
  const [emi, setEMi] = useState(0);
  const handlecalsi = () => {
    const simpleInt = (p * n * r) / 100;
    setSi(simpleInt);
    const repayamount = Number(p) + Number(simpleInt);
    setrRP(repayamount);
    const emiloacal = repayamount / (n * 12);
    setEMi(emiloacal);
  };
  //// using with usememo or use useEffect
  const em = useMemo(() => handlecalsi(), [p, n, r]);
  // useEffect(() => {
  //   handlecalsi();
  // }, [p, n, r]);
  return (
    <div style={{ backgroundColor: "orange" }}>
      <Card className="Calc">
        <Form style={{ margin: "30px" }}>
          <Row>
            <Col md="5">
              <Form.Label style={{ padding: "5px" }}>
                <u>
                  {" "}
                  <u>
                    <b>Enter Loan Amount:</b>
                  </u>
                </u>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Total Loan Amount"
                onChange={(e) => setP(e.target.value)}
              ></Form.Control>
            </Col>
          </Row>

          <br></br>
          <Col md="5">
            <Form.Label>
              <u>
                <b>Number Of Years:</b>
              </u>
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Number Of Years"
              onChange={(e) => setN(e.target.value)}
            ></Form.Control>
          </Col>

          <br></br>
          <Col md="5">
            <Form.Label>
              <u>
                <b>Rate Of Interest:</b>
              </u>
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Rate Of Interest"
              onChange={(e) => setR(e.target.value)}
            ></Form.Control>
            <br></br>
            <Button onClick={handlecalsi}>calculate</Button>
            <br></br>
            <p style={{ color: "white" }}> simple interest={si}</p>
            <p style={{ color: "white" }}> repay amont={rp}</p>
            <p style={{ color: "white" }}>EMI={emi}</p>
          </Col>
        </Form>
      </Card>
    </div>
  );
};

export default Calci;
