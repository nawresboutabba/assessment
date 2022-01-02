import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import "../../style/Pagination.css";

export default function PaginationComponent({ paginationCount, goToNextPage }) {
  return (
    <div className="pagination">
      <Pagination
        className="pagination-item"
        count={paginationCount}
        onChange={goToNextPage}
        color="Primary"
        
      />
    </div>
  );
}
