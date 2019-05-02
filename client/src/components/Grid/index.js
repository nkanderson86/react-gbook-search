import React from "react";

// setting up a Container component to call and pass in the responsiveness and children to be put into the div?  This one is a bit confusing to me. 
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Same as the Container component just with a Row instead.
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Setting up a Col component that will take the size passed down and create a col-"size" for each div that will lay out the columns as wanted
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
