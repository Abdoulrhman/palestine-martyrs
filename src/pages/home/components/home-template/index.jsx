import React, { useEffect, useState } from "react";
import "./index.scss";
import CardContainer from "../cards_section";
import Pagination from "../pagination";
import FilterCards from "../filter-cards";

export default function HomeTemplate({ cards }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [selectedLetter, setSelectedLetter] = useState("all");
  const [letters, setLetters] = useState([]);
  const itemsPerPage = 2;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(cards.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(cards.length / itemsPerPage));
  }, [itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % cards.length;
    setItemOffset(newOffset);
  };


  useEffect(() => {
    const generatedLetters = [];
    for (let i = 65; i <= 90; i++) {
      const letter = String.fromCharCode(i);
      generatedLetters.push(letter);
    }

    setLetters(generatedLetters);
  }, []);

  const handleFilter = (letter) => {
    setSelectedLetter(letter);
    console.log('inside fun', letter, currentItems);
    let filteredItems;

    if (letter === "all") {
      filteredItems = cards;
    } else {
      filteredItems = cards.filter((item) =>
        item.title.toLowerCase().startsWith(letter.toLowerCase())
      );
    }

    setCurrentItems(filteredItems.slice(0, itemsPerPage));
    setPageCount(Math.ceil(filteredItems.length / itemsPerPage));
    setItemOffset(0);
  };

  return (
    <div>
      <FilterCards
        handleFilter={handleFilter}
        selectedLetter={selectedLetter}
        letters={letters} />


      {currentItems && <CardContainer cards={currentItems} />}
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </div>
  );
}
