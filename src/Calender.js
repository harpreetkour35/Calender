import React from "react";
import "./Calender.css";

function Calender() {
  let squares = [];
  for (let i = 1; i <= 31; i++) {
    if (i % 2 === 0) {
      squares.push(<div className="square-yellow">{i}</div>);
    } else {
      squares.push(<div className="square-orange">{i}</div>);
    }
  }



  return (
    <div>
      <div className="calender">{squares}</div>
    </div>
  );
}

export default Calender;
