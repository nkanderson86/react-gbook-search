// importing our required react packages and the App.js file, the registerServiceWorker import sets up somethign that I don't quite understand but that will make the site run faster using caching. ReactDOM renders our App.js file  and invokes our registerServiceWorker function.
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
