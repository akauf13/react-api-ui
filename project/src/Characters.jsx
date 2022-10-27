import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Character() {
  const [characters, setCharacters] = useState();
  const [current, setCurrent] = useState(0);
  const getCharacters = async () => {
    const response = await axios.get(
      "https://breakingbadapi.com/api/characters",
      {
        headers: { Accept: "application/json" },
      }
    );

    console.log(response.data);
    await setCharacters(response.data);
  };

  

  useEffect(() => {
    getCharacters();

  }, []);

  // if character index > 56 send it back to the beginning of the array
  if (current >= 57) {
    setCurrent(0)
  }

  // if the index of the previous character will be -1 send it to the end of the array, otherwise go to previous character 
  let negative = () => {
    if (current -1 === -1) {
      setCurrent(56)
    } else {setCurrent(current -1)}
  }


  if (!characters) return <h2> </h2>;

  return (
    <div className="App">
      <h1>Breaking Bad Characters</h1>
      {/* <div className="container">{characters[0].name}</div> */}
      <button className="btn" onClick={
        () => negative()}>
        Previous Character
      </button>
      <button className="btn" onClick={
        () => setCurrent(current + 1)}>
        Next Character
      </button>
      {characters.length > 0 && (
        <Card
          name={characters[current].name}
          nickname={characters[current].nickname}
          occupation={characters[current].occupation}
          img={characters[current].img}
          portrayed={characters[current].portrayed}
        />
      )}
    </div>
  );
}

export default Character;
