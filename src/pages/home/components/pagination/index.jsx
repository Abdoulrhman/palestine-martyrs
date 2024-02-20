import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import ReactPaginate from "react-paginate";

export default function Pagination({ handlePageClick, pageCount }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next >>"
      previousLabel="<< Back"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      containerClassName="pagination-container"
      pageLinkClassName="page-number"
      previousLinkClassName="page-number"
      nextLinkClassName="page-number"
      activeLinkClassName="active-page"
      marginPagesDisplayed={1}
      initialPage={0}
      forcePage={0}
      disableInitialCallback={true}
      previousClassName="previous"
      nextClassName="next"
      breakClassName="break"
      onPageActive={({ selected }) => {
        if (selected === 0) {
          document.querySelector(".previous").classList.add("disabled");
        } else {
          document.querySelector(".previous").classList.remove("disabled");
        }
        if (selected === pageCount - 1) {
          document.querySelector(".next").classList.add("disabled");
        } else {
          document.querySelector(".next").classList.remove("disabled");
        }
      }}
    />
  );
}


Pagination.propTypes = {
  pageCount: PropTypes.number,
  handlePageClick: PropTypes.func,
};