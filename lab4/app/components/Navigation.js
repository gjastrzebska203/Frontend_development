"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();

  const [pokemon_name, setPokemonName] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`
      );
      if (!response.ok) throw new Error("Pokémon not found");
      const data = await response.json();
      setError("");
      router.push(`/pokemon/${data.id}`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <nav>
        <div id="buttons">
          <Link href="/">
            <button className="nav">Home</button>
          </Link>
          <Link href="/pokemon">
            <button className="nav">Pokemons</button>
          </Link>
          <Link href="/favourites">
            <button className="nav">Favourites</button>
          </Link>
        </div>
        <div id="name">Pokemon Database</div>
        <input
          type="text"
          value={pokemon_name || ""}
          onChange={(e) => setPokemonName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && pokemon_name) {
              handleSearch();
            }
          }}
          placeholder="Search"
          id="search-bar"
        />
      </nav>
      {error && <p className="error">{error}</p>}
    </>
  );
}
