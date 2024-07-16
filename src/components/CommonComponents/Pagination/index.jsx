import React from "react";
import classes from "./Pagination.module.css";

const Pagination = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  totalItems,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (array) =>
    array.slice(indexOfFirstItem, indexOfLastItem);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className={classes?.pagination}>
      {currentPage > 1 && (
        <button onClick={() => handlePageChange(currentPage - 1)}>
          Previous
        </button>
      )}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
