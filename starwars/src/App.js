import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characts, setCharacts] = useState([]);

  useEffect(() => {
    axios
      .get('http https://swapi.dev/api/people/')
      .then((res) => {
        console.log(res.data);
        setCharacts(res.data)
      })
      .catch((err) =>{
        console.log('Error:',err);
      })
  }, []);


  return (
    <div className="App">
      <h1 className="Header">Star Wars</h1>
      {characts.map((char)=> {
        console.log(char.name);
        return <Character char={char} key={char.id}/>;
      })}
    </div>
  );
}

export default App;
