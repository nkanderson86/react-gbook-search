import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

// A class component for NAB with an initial state for open and width.  
class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  // updateWidth looks at if the NAV is open and the window.innerWidth is greater than 991, and it sets the open key back to a value of false and then line 20 updates the state to the new state of false. 
  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  // toggleNav function to set the open value to the opposite of what it is currently.
  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  // lifecycle function to update the width of the window 
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
      {/* setting up a link to our root page if the user clicks on our navbar text, Link comes from the ReactDOM class we imported above */}
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        {/* button to toggle nav menu items, if the window gets too small it will collapse into a hamburher menu for the search and the saved buttons  */}
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
