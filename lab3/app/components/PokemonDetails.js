"use client";
import { useState, useEffect } from "react";

export default function PokemonDetails({ id }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    }
    fetchPokemon();
  }, [id]);

  function handleClick() {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const newFavPokemon = {
      id: pokemon.id,
      name: pokemon.name,
      img: pokemon.sprites.other.showdown.front_default,
    };

    if (!favourites.some((fav) => fav.id === pokemon.id)) {
      favourites.push(newFavPokemon);
      localStorage.setItem("favourites", JSON.stringify(favourites));
    }
  }

  return (
    <div className="pokemon-details">
      <h2>{pokemon.name}</h2>
      <img
        src={pokemon.sprites.other.showdown.front_default}
        alt={pokemon.name}
      />
      <p>Types: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Height: {pokemon.height}</p>
      <h3>Stats:</h3>
      <ul>
        {pokemon.stats.map((stat, index) => (
          <li key={index}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      <div id="button-container">
        <button id="favourites" onClick={handleClick}>
          Add to favourites
        </button>
      </div>
    </div>
  );
}
