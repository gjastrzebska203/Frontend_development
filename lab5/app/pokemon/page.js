"use client";
import * as React from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Navigation from "../components/Navigation";
import PokemonList from "../components/PokemonList";
import Link from "next/link";

export default function PokemonListPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const last_filters = JSON.parse(localStorage.getItem("filters")) || "";
  const limit_param = searchParams.get("limit") || last_filters.limit || 20;
  const search_param = searchParams.get("search") || last_filters.search || "";
  const type_param = searchParams.get("type") || last_filters.type || "";

  const [filters, setFilters] = useState({
    type: type_param,
    search: search_param,
    limit: limit_param,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const new_filters = { ...filters };
    localStorage.setItem("filters", JSON.stringify(new_filters));
    const query = new URLSearchParams(filters).toString();
    router.push(`/pokemon?${query}`);
  }

  return (
    <>
      <Navigation />
      <div id="options">
        <form id="filter" onSubmit={handleSubmit}>
          <input
            type="text"
            name="type"
            value={filters.type}
            onChange={handleChange}
            placeholder="Choose a type:"
          />
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleChange}
            placeholder="Search for a name:"
          />
          <input
            type="number"
            name="limit"
            value={filters.limit}
            onChange={handleChange}
            placeholder="Choose a limit:"
            min="1"
          />
          <button type="submit">Submit</button>
        </form>
        <div id="compare">
          <Link href={"/compare"}>
            <button className="compare">Compare pokemons</button>
          </Link>
          <button
            className="compare"
            onClick={() => {
              localStorage.setItem(
                "compared",
                JSON.stringify({ p1: "", p2: "" })
              );
            }}
          >
            Clear compare
          </button>
        </div>
      </div>
      <div id="pokemon-list">
        <PokemonList
          limit={limit_param}
          search={search_param}
          type={type_param}
        />
      </div>
    </>
  );
}
