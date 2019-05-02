// importing react, deconstructing ListItem from our List component and Row, Col from our Grid component
import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

// functional compoenent to create a book that takes in the 7 props listet inside the {} on line 8 
function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    // this sets up the rendering of each of the props as a li 
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
