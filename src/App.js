// src/App.js
import React from "react";
import Combobox from "./Combobox";
import "./App.css";

const App = () => {
  const suggestions = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Fig",
    "Grape",
    "Kiwi",
    "Lemon",
    "Mango",
    "Orange",
    "Peach",
    "Pear",
    "Plum",
    "Strawberry",
    "Watermelon",
  ];

  return (
    <div className="App">
      <h1>Combobox Demo</h1>
      <Combobox suggestions={suggestions} />
    </div>
  );
};

export default App;
