// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterCard = styled.div `
    margin: auto;
    padding: 20px;
    width: 90%;
    border: 1.5px solid black;
    background-color: slategrey;
    color: white;
`
const CharacterName = styled.h2 `
    font-size: 45px;
    color: white;
`
const Character = (props) =>{

    return(
        <CharacterCard>
            <CharacterName>{props.name}</CharacterName>
            <p>Gender:{props.gender} </p>
            <p>Height: {props.height}</p>
            <p>Birth Year: {props.birth_year}</p>
            <p>Home Planet: {props.homeworld}</p>
            <p>Films: {props.films}</p>
        </CharacterCard>  
    );
};

export default Character;