import React from "react";
import RickAndMorty from "../../images/rick-and-morty.png";
import "./MainContent.scss";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="main-content__container container">
        <div className="main-content__body">
          <h2 className="main-content__title"> The Rick And Morty</h2>
          <div className="main-content__image">
            <img src={RickAndMorty} alt="rick-and-morty" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
