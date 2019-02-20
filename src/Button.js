import React from "react";

export default function Button(props) {
  return (
    <button
      type="button"
      onClick={() => props.handleChange(props.loggedStatus)}
    >
      {props.loggedStatus ? "Sign in" : "Sign out"}!
    </button>
  );
}
