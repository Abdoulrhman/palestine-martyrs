import React from "react";
import "./index.scss";
import PropTypes from "prop-types";

export default function FilterCards({ handleFilter, selectedLetter, letters }) {
  return (
    <div className="filter-container">
      <div
        className="filter-number all"
        style={{
          backgroundColor: selectedLetter === "all" ? "#9C3818" : "transparent",
          color: selectedLetter === "all" ? "white" : "black",
        }}
        onClick={() => {
          handleFilter("all");
        }}
      >
        All
      </div>

      {letters?.map((letter) => (
        <div
          key={letter}
          className="filter-number"
          style={{
            backgroundColor:
              selectedLetter === letter ? "#9C3818" : "transparent",
            color: selectedLetter === letter ? "white" : "black",
          }}
          onClick={() => {
            handleFilter(letter);
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}

FilterCards.propTypes = {
  selectedLetter: PropTypes.string,
  handleFilter: PropTypes.func,
  letters: PropTypes.arrayOf(PropTypes.string),
};