"use client";
import { useState, useEffect } from "react";

export default function PokemonDetails({ id }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) throw new Error("Failed to fetch Pokémon");
        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPokemon();
  }, [id]);

  function getFavourites() {
    return JSON.parse(localStorage.getItem("favourites")) || [];
  }

  function handleClick() {
    const favourites = getFavourites();
    const newFavPokemon = {
      id: pokemon.id,
      name: pokemon.name,
      img:
        pokemon.sprites.other?.showdown?.front_default ||
        pokemon.sprites.front_default,
    };

    if (!favourites.some((fav) => fav.id === pokemon.id)) {
      favourites.push(newFavPokemon);
      localStorage.setItem("favourites", JSON.stringify(favourites));
    }
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!pokemon) {
    return <p>Loading...</p>;
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
      <div className="button-container">
        <button className="favourites-button" onClick={handleClick}>
          Add to favourites
        </button>
      </div>
    </div>
  );
}
