import React from "react";
import Box from "./Box";

function Container() {
  const box = [1, 2, 3, 4];

  return (
    <div className="boxes">
      {box.map((box) => (
        <Box />
      ))}
    </div>
  );
}

export default Container;
