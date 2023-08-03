import React from "react";
import CharacterElement from "../CharacterElement/CharacterElement.jsx";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";

import "./Characters.scss";

const Characters = (props) => {
  const { characters } = props;
  const [modalWindow, setModalWindow] = React.useState(false);
  const [data, setData] = React.useState("");

  const openModalWindow = (props) => {
    setData(props);
    setModalWindow(true);
  };

  const closeModalWindow = () => {
    setModalWindow(false);
  };

  return (
    <React.Fragment>
      {characters.map((character) => {
        return (
          <CharacterElement
            key={character.id}
            {...character}
            openModalWindow={openModalWindow}
          />
        );
      })}
      {modalWindow && (
        <ModalWindow data={data} closeModalWindow={closeModalWindow} />
      )}
    </React.Fragment>
  );
};

export default Characters;
