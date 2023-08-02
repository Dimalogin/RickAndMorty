import React from "react";
import "./NotFoundPage.scss";
import Header from "../Header/Header.jsx";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="page-notfound">
        <div className="page-notfound__container container">
          <div className="page-notfound__body">
            <div className="page-notfound__title">Page Not Found</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFoundPage;
