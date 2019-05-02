// this is the bringing in react, and 
import React from "react";
// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// importing the pages 
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  // setting up what the App is going to return to be rendered by index.js file. this is a stateless functional compenent because it's not set up as a class and doesn't use the render() function. 
  return (
    <Router>
      <div>
        {/* displays NAV Bar */}
        <Nav />
        <Switch>
          {/* routes to each page based off the url */}
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
