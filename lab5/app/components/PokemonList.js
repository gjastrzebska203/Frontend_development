"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

async function getPokemonInfo(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  const name = data.name;
  const types = data.types.map((x) => x.type.name);
  const img = data.sprites.other.showdown.front_default;
  return { name: name, types: types, img: img, id: id };
}

async function getPokemonList(limit, search, type) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`);
  const data = await response.json();
  const id_list = data.results.map((_, id) => id + 1);
  let result = await Promise.all(id_list.map((id) => getPokemonInfo(id)));
  if (type != "") {
    result = result.filter((x) => x.types.includes(type));
  }
  if (search != "") {
    result = result.filter((x) => x.name.includes(search));
  }
  result = result.slice(0, limit);
  return result;
}

export default function PokemonList({ limit, search, type }) {
  const router = useRouter();
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemonList() {
      const response = await getPokemonList(limit, search, type);
      const new_filters = {
        limit: limit,
        search: search,
        type: type,
      };
      localStorage.setItem("filters", JSON.stringify(new_filters));
      setPokemonList(response);
    }
    fetchPokemonList();
  }, [limit, search, type]);

  function handleClick1(pokemon_id) {
    const compared_list = JSON.parse(localStorage.getItem("compared")) || {};
    const pokemon_id2 = compared_list.p2 || "";
    const new_compared = { p1: pokemon_id, p2: pokemon_id2 };
    localStorage.setItem("compared", JSON.stringify(new_compared));
  }

  function handleClick2(pokemon_id) {
    const compared_list = JSON.parse(localStorage.getItem("compared")) || {};
    const pokemon_id1 = compared_list.p1 || "";
    const new_compared = { p1: pokemon_id1, p2: pokemon_id };
    localStorage.setItem("compared", JSON.stringify(new_compared));
  }

  return (
    <div id="pokemon-buttons">
      {pokemonList.map((pokemon) => (
        <div key={pokemon.id} className="pokemonButton">
          <div className="poke-info">
            <img src={pokemon.img} alt={pokemon.name} />
            {pokemon.id}. {pokemon.name}
          </div>
          <button
            id="details"
            onClick={() => router.push(`/pokemon/${pokemon.id}`)}
          >
            See details
          </button>
          <div className="compare-buttons">
            <button
              className="compare-pokemon"
              onClick={() => handleClick1(pokemon.id)}
            >
              First compared
            </button>
            <button
              className="compare-pokemon"
              onClick={() => handleClick2(pokemon.id)}
            >
              Second compared
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
