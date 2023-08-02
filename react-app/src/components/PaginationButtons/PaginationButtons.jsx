import React from "react";
import ArrowLeft from "../../images/arrow-left.png";
import ArrowRight from "../../images/arrow-right.png";
import "./PaginationButtons.scss";

const PaginationButtons = (props) => {
  const { currentPage, getNextPage, getPreviousPage, lastPage } = props;

  return (
    <React.Fragment>
      <button onClick={getPreviousPage} className="switch-pagination__btn">
        <img
          className="switch-pagination__icon"
          src={ArrowLeft}
          alt="icon-arrow-left"
        />
      </button>
      <div className="switch-pagination__current-page">{currentPage}</div>
      <div className="switch-pagination__slash">&#47;</div>
      <div className="switch-pagination__last-page">{lastPage}</div>
      <button onClick={getNextPage} className="switch-pagination__btn">
        <img
          className="switch-pagination__icon"
          src={ArrowRight}
          alt="icon-arrow-right"
        />
      </button>
    </React.Fragment>
  );
};

export default PaginationButtons;
