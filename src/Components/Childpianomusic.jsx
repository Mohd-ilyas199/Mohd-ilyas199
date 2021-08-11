import React from "react";
import { Button } from "react-bootstrap";
const Childpianomusic = () => {
  const handleplay = (bit) => {
    const audio = new Audio(`${bit}.mp3`);
    audio.play();
  };
  document.addEventListener("keypress", (e) => {
    if (e.key === "a" && handleplay("sa"));
    if (e.key === "s" && handleplay("re"));
    if (e.key === "d" && handleplay("ga"));
    if (e.key === "f" && handleplay("ma"));
    if (e.key === "g" && handleplay("pa"));
    e.stopPropagation();
  });
  return (
    <div>
      <Button variant="light" onMouseDown={() => handleplay("sa")}>
        SA
      </Button>

      <Button variant="dark" onMouseDown={() => handleplay("sa")}>
        RE
      </Button>

      <Button variant="light" onMouseDown={() => handleplay("re")}>
        GA
      </Button>

      <Button variant="dark" onMouseDown={() => handleplay("ma")}>
        MA
      </Button>

      <Button variant="light" onMouseDown={() => handleplay("pa")}>
        PA
      </Button>

      <Button variant="dark">DA</Button>

      <Button variant="light">NI</Button>
    </div>
  );
};

export default Childpianomusic;
