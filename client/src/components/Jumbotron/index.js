import React from "react";
import "./style.css";

// Jumbo component takes in the children argument and builds a jumbotron with it
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;
