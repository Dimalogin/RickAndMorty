import React from "react";
import Header from "../Header/Header.jsx";
import Characters from "../Characters/Characters.jsx";
import PaginationButtons from "../PaginationButtons/PaginationButtons.jsx";
import Loader from "../Loader/Loader.jsx";
import "./Pagination.scss";

const Pagination = () => {
  const [characters, setCharacters] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(0);
  const [fetching, setFetching] = React.useState(true);
  const [loader, setLoader] = React.useState(true);

  const getNextPage = () => {
    if (currentPage < lastPage) {
      setCurrentPage((prevState) => prevState + 1);
      setFetching(true);
    }
  };
  const getPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevState) => prevState - 1);
      setFetching(true);
    }
  };

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then((response) => response.json())
      .then((response) => {
        setLastPage(response.info.pages);
        setCharacters(response.results);
      })
      .catch((err) => {
        setLastPage(0);
        setCharacters([]);
      })
      .finally(() => {
        setLoader(false);
        setFetching(false);
      });
  }, [fetching]);

  return (
    <React.Fragment>
      <Header />
      <div className="pagination">
        <div className="pagination__container container">
          <div className="pagination__body">
            <div className="pagination__list">
              <Characters characters={characters} />
            </div>
            <div className="pagination__loader">{loader && <Loader />}</div>

            <div className="pagination__switch switch-pagination">
              <PaginationButtons
                getPreviousPage={getPreviousPage}
                getNextPage={getNextPage}
                currentPage={currentPage}
                lastPage={lastPage}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pagination;
