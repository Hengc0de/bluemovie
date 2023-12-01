import React from "react";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
// a7853474;
import MovieCard from "./components/MovieCard";
const API_URL = import.meta.env.VITE_APP_OMDB_API_URL;
const movie1 = {
  Title: "Amazing Spiderman Syndrome",
  Year: "2012",
  imdbID: "tt2586634",
  Type: "movie",
  Poster: "N/A",
};
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Sex");
  }, []);
  return (
    <div className="app">
      <h1>Blue Movie</h1>
      <div className="search">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search for movie"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img src={SearchIcon} alt="" onClick={() => searchMovies(searchTerm)} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie1={movie}></MovieCard>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movie Found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
