import React from "react";

// Functional component to build a footer, pretty basic here.  Shows the text and logo defined in the <i> tag.
function Footer() {
  return (
    <footer>
      <hr />
      <p className="pull-right">
        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}

export default Footer;
