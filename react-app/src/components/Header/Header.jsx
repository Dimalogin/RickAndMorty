import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__body">
          <Link to="/" className="header__logo">
            RickAndMorty
          </Link>
          <nav className="header__navigation">
            <Link to="endless-loading" className="header__link">
              EndlessLoading
            </Link>
            <Link to="pagination" className="header__link">
              Pagination
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
