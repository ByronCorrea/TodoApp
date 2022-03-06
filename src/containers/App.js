import React, { useState } from "react";
import "./App.css";
import TodoList from "../components/TodoList.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "#e9ecef" : "yellow" }}>
          <i class="bx bxs-sun"></i>
        </span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"></span>
          </label>
        </div>
        <span style={{ color: darkMode ? "yellow" : "#e9ecef" }}>
          <i class="bx bxs-moon"></i>
        </span>
      </div>
      <div
        className="App"
        style={{ background: darkMode ? "#343a40" : "#003049" }}
      >
        <TodoList />
      </div>
    </div>
  );
}

export default App;
