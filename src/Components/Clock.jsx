import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../Components/clock.css";

export const Clock = () => {
  const [sec, setSec] = useState(55);
  const [min, setMin] = useState(59);
  const [hr, setHr] = useState(0);
  setTimeout(() => {
    setSec(sec + 1);

    if (sec === 60) {
      setMin(min + 1);
      setSec(0);
      if (min % 60 === 0) {
        setHr(hr + 1);
        setMin(0);
        setSec(0);
      }
    }
  }, 1000);
  return (
    <div>
      <Card className="card1">
        <span>
          {hr}:{min}:{sec}
        </span>
      </Card>
    </div>
  );
};
