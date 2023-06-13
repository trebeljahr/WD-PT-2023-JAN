import "./App.css";
import {
  Routes,
  Route,
  NavLink,
  Outlet,
  useParams,
  Link,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { allPokemon } from "./data";

function Home() {
  return (
    <div>
      <h1>We are Home!</h1>
    </div>
  );
}

function Navbar() {
  const determineStyle = ({ isActive }) => {
    return {
      color: isActive ? "lightblue" : "",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <nav className="navbar">
      <NavLink style={determineStyle} to={"/"}>
        Home
      </NavLink>
      <NavLink style={determineStyle} to={"/about"}>
        About
      </NavLink>
      <NavLink style={determineStyle} to={"/pokemon"}>
        Pokemon
      </NavLink>
    </nav>
  );
}

function PageLayout() {
  return (
    <div className="layout">
      <Navbar />
      <main style={{ marginLeft: "30px" }}>
        <Outlet />
      </main>
      <footer className="footer">Made with ❤️ by Ironhack</footer>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>We are on the About Page!</h1>
    </div>
  );
}

function PokemonDetails() {
  let params = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      console.log(params.name);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.name}`
      );
      const pokemon = await response.json();
      console.log(pokemon);
      const index = allPokemon.findIndex(
        (currentName) => pokemon.name === currentName
      );
      setPokemon({
        ...pokemon,
        next: allPokemon[index + 1],
        prev: allPokemon[index - 1],
      });
    }
    fetchPokemon();
  }, [params]);

  if (!pokemon) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>
        #{pokemon.id} {pokemon.name}
      </h1>
      <img
        style={{ border: "1px solid black" }}
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      ></img>
      <div>
        {pokemon.prev && <Link to={"/pokemon/" + pokemon.prev}>Prev</Link>}
        {pokemon.next && <Link to={"/pokemon/" + pokemon.next}>Next</Link>}
      </div>
    </div>
  );
}

function PokemonOverview() {
  return (
    <>
      <h1>All pokemon:</h1>
      {allPokemon.map((pokemon) => {
        return (
          <h2>
            <Link to={pokemon}>{pokemon}</Link>
          </h2>
        );
      })}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon">
          <Route index element={<PokemonOverview />} />
          <Route path=":name" element={<PokemonDetails />} />
        </Route>
        <Route path="*" element={<h1>404 - There's nothing here!</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
