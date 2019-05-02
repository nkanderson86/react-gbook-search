import React from "react";
import "./style.css";

// This component exports both the List and ListItem components

// Two components here that both accept an argument of children, one buils an unordered list and the other builds an actual list item with it. 
export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
