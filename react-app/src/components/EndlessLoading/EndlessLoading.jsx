import React from "react";
import Header from "../Header/Header.jsx";
import Characters from "../Characters/Characters.jsx";
import "./EndlessLoading.scss";

const EndlessLoading = () => {
  const [characters, setCharacters] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [fetching, setFetching] = React.useState(true);
  const [loader, setLoader] = React.useState(true);
  const [totalCount, setTotalCount] = React.useState(0);

  React.useEffect(() => {
    if (fetching) {
      fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setCharacters([...characters, ...response.results]);
          setCurrentPage((prevState) => prevState + 1);
          setTotalCount(response.info.count);
        })
        .finally(() => {
          setFetching(false);
          setLoader(false);
        });
    }
  }, [fetching]);

  const scrollHandler = (event) => {
    if (
      event.target.documentElement.scrollHeight -
        (event.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      characters.length < totalCount
    ) {
      console.log(true);
      setFetching(true);
    }
  };

  React.useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <React.Fragment>
      <Header />
      <div className="endless-loading">
        <div className="endless-loading__container container">
          <div className="endless-loading__body">
            <Characters characters={characters} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EndlessLoading;
