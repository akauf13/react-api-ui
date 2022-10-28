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
    response.data[7].img =
      "https://static.wikia.nocookie.net/breakingbad/images/a/a4/Saul_S5b.jpg";
    response.data[13].img =
      "https://static.wikia.nocookie.net/breakingbad/images/7/78/Lydia_S5b.jpg";
    response.data[16].img =
      "https://static.wikia.nocookie.net/breakingbad/images/2/2d/Cast_bb_800x600_skinny-pete.jpg";
    response.data[38].img =
      "https://static.wikia.nocookie.net/breakingbad/images/3/39/Holly_White_2009.png";
    console.log(response.data);
    await setCharacters(response.data);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  // if character index > 56 send it back to the beginning of the array
  if (current >= 57) {
    setCurrent(0);
  }

  // if the index of the previous character will be -1 send it to the end of the array, otherwise go to previous character
  let negative = () => {
    if (current - 1 === -1) {
      setCurrent(56);
    } else {
      setCurrent(current - 1);
    }
  };

  if (!characters) return <h2> </h2>;

  return (
    <div className="main">
      <div className="back"></div>
      <div className="film"></div>
        <div className="container">
          <h1>
            <span className="green">Br</span>eaking
            <span className="green">Ba</span>d Characters
          </h1>
        </div>
      <div className="wrapper">
        <button className="btn left" onClick={() => negative()}>
          Previous Character
        </button>
        <button className="btn right" onClick={() => setCurrent(current + 1)}>
          Next Character
        </button>
        {characters.length > 0 && (
          <Card
            name={characters[current].name}
            nickname={characters[current].nickname}
            occupation={characters[current].occupation.join(", ")}
            img={characters[current].img}
            portrayed={characters[current].portrayed}
          />
        )}
      </div>
    </div>
  );
}

export default Character;
