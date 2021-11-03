import React, { useEffect, useState } from "react";
import axios from "axios";

function Cards() {
    const [pokemon, setPokes] = useState([]);
//    useEffect(() => {
//     fetch("https://api.pokemontcg.io/v2/cards?pageSize=10")
//       .then((response) => response.json())
//        .then((pok) => {
//          setPokemon(pok.data);
//        });

//   }, []);

useEffect(() => {
    getPokes();
  }, []);

  const getPokes = async () => {
    const response = await axios.get(
      "https://api.pokemontcg.io/v2/cards?pageSize=6&page=11"
    );
    setPokes(response.data.data);
  };

    return (
        <div className="c0">
{pokemon.map((poke, i)=>{
    return <div className="c1">
        <h1>{poke.name}</h1>
        <img className="photo" src={poke.images.large}  alt={`img for ${poke.name} `}  />
    </div>
})}
        </div>
    )
}

export default Cards;
