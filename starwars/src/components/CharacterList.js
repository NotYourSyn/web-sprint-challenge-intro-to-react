import React, { useState, useEffect } from "react";
import axios from "axios";

import Character from "./Character";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`http https://swapi.dev/api/people/`)
      .then((res) => {
        console.log("Res: ", res);
        setFilms(res.data);
      })
      .catch((err) => {
        console.log("Error occurred: ", err);
      });
  }, []);

  return (
    // <div className="#">
    //   {films.map((film) => {
    //     return (
    //         <CharacterCard
    //         <CharacterName>{props.name}</CharacterName>
    //         <p>Gender:{props.gender} </p>
    //         <p>Height: {props.height}</p>
    //         <p>Birth Year: {props.birth_year}</p>
    //         <p>Home Planet: {props.homeworld}</p>
    //         <p>Films: {props.films}</p>
    //         />
    //     );
    //   })}
    // </div>
  );
}
