import React from "react";

// functional component that takes in user input and two methods defined on our App.js file.  Sets up the form to be able to display and update user input as they are typing it in and also to trigger the search when the user hits the search button. 
function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          // value is typed in by the user 
          value={q}
          placeholder="Ready Player One"
          name="q"
          //  updates states of q everytime user types something
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          // hits the API to search when the user submits form
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
