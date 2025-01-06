import Link from "next/link";

export default function Navigation() {
  return (
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
      <input type="text" placeholder="Search" id="search-bar" />
    </nav>
  );
}
