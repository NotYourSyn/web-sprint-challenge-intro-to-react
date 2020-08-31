// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharactCard = styled.div `
    margin: auto;
    padding: 20px;
    width: 90%;
    border: 1.5px solid black;
    background-color: slategrey;
    color: red;
`
const CharactName = styled.h2 `
    font-size: 45px;
    color: red;
`
const Character = (charData) => {
    const charInfo= (charData.charData);
    console.log(charInfo);

    return(
        <CharactCard>
            <CharactName>{charInfo.name}</CharactName>
            <span>Gender:{charInfo.gender} </span>
            <span>Height: {charInfo.height}</span>
            <span>Birth Year: {charInfo.birth_year}</span>
            <span>Home Planet: {charInfo.homeworld}</span>
            <span>Films: {charInfo.films}</span>
        </CharactCard>  
    );
};

export default Character;