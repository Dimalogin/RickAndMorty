import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__body">
          <NavLink to="/" className="header__logo">
            RickAndMorty
          </NavLink>
          <nav className="header__navigation">
            <NavLink
              to="/endless-loading"
              className={({ isActive }) =>
                isActive ? "header__link--active" : "header__link"
              }
            >
              EndlessLoading
            </NavLink>
            <NavLink
              to="/pagination"
              className={({ isActive }) =>
                isActive ? "header__link--active" : "header__link"
              }
            >
              Pagination
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
