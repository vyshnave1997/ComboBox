// src/components/Combobox.js
import React, { useState } from "react";
import "./Combobox.css";

const Combobox = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setIsDropdownOpen(true);
    } else {
      setFilteredSuggestions([]);
      setIsDropdownOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
    setIsDropdownOpen(false);
  };

  const handleBlur = () => {
    setTimeout(() => setIsDropdownOpen(false), 100); // Delay to allow click event on dropdown
  };

  return (
    <div className="combobox">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={() => setIsDropdownOpen(true)}
        placeholder="Start typing..."
      />
      {isDropdownOpen && filteredSuggestions.length > 0 && (
        <ul className="dropdown">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="dropdown-item"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Combobox;
