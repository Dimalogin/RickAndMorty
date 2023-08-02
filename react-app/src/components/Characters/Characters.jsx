import React from "react";
import CharacterElement from "../CharacterElement/CharacterElement.jsx";
import "./Characters.scss";

const Characters = (props) => {
  const { characters } = props;

  return (
    <React.Fragment>
      {characters.map((character) => {
        return <CharacterElement key={character.id} {...character} />;
      })}
    </React.Fragment>
  );
};

export default Characters;
