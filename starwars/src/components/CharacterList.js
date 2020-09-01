import React, { useState, useEffect } from "react";
import axios from "axios";
//import styled from 'styled-components';
import Character from "./Character";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`http https://swapi.dev/api/people/`)
      .then((res) => {
        console.log("Res: ", res);
        setCharacters(res.data);
      })
      .catch((err) => {
        console.log("Error occurred: ", err);
      });
  }, []);

  return (
    <div className="character">
      {characters.map((character) => {
        return (
            <Character
                 key={character.id}
                //<CharacterName>{character.name}</CharacterName>
                 Gender={character.gender}
                 Height={character.height}
                 Birth Year={character.birth_year}
                 Home Planet={character.homeworld}
                 Films={character.films}
            />
        );
      })}
    </div>
  );
}
