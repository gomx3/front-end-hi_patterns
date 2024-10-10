import React from "react";

export default function Toggle({ toggleTheme }) {
  return (
    <label className="switch">
      <input type="checkbox" onClick={toggleTheme} />
      <span className="slider round" />
    </label>
  );
}
