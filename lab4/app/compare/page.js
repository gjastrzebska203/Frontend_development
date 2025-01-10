"use client";
import { useState, useEffect } from "react";
import Navigation from "@/app/components/Navigation";
import { useSearchParams, useRouter } from "next/navigation";
import PokemonDetails from "../components/PokemonDetails";

async function getPokemonInfo(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  // if (!response.ok) throw new Error("Pokemon not found");
  const data = await response.json();
  const types = data.types.map((x) => x.type.name);
  const img = data.sprites.other.showdown.front_default;
  const stats = data.stats.map((stat) => [stat.stat.name, stat.base_stat]);
  return {
    name: data.name,
    types: types,
    img: img,
    id: data.id,
    stats: stats,
  };
}

export default function ComparePage({ p1, p2 }) {
  const last_compared = JSON.parse(localStorage.getItem("compared")) || "";

  return (
    <>
      <Navigation />
      <div id="compared">
        <div className="pokemon-compared">
          {last_compared.p1 ? (
            <PokemonDetails id={last_compared.p1} />
          ) : (
            <p>Pick a Pokémon!</p>
          )}
        </div>
        <div className="pokemon-compared">
          {last_compared.p2 ? (
            <PokemonDetails id={last_compared.p2} />
          ) : (
            <p>Pick a Pokémon!</p>
          )}
        </div>
      </div>
    </>
  );
}
