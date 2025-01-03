"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

async function getPokemonInfo(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  const name = data.name;
  const types = data.types.map((x) => x.type.name);
  const img = data.sprites.other.showdown.front_default;
  return { name: name, types: types, img: img, id: id };
}

async function getPokemonList(limit, search, type) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
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
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemonList() {
      const response = await getPokemonList(limit, search, type);
      setPokemonList(response);
    }
    fetchPokemonList();
  }, [limit, search, type]);

  return (
    <div id="pokemon-buttons">
      {pokemonList.map((pokemon) => (
        <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
          <button className="pokemonButton">
            <img src={pokemon.img} alt={pokemon.name} />
            {pokemon.id}. {pokemon.name}
          </button>
        </Link>
      ))}
    </div>
  );
}
