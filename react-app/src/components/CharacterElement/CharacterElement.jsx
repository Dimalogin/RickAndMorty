import React from "react";
import "./CharacterElement.scss";

const CharacterElement = (props) => {
  const { name, image, openModalWindow } = props;

  return (
    <div className="endless-loading__column">
      <div
        onClick={() => openModalWindow(props)}
        className="endless-loading__item"
      >
        <div className="endless-loading__image">
          <img src={image} alt="icon" />
        </div>
        <div className="endless-loading__title">{name}</div>
      </div>
    </div>
  );
};

export default CharacterElement;
