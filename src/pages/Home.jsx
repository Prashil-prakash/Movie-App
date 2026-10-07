import Moviecard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "john wick", release_date: "2004" },
    { id: 2, title: "terminator", release_date: "2014" },
    { id: 3, title: "matrix", release_date: "2024" },
  ];

  const handleSearch = (e) => {
    e.preventDefault()

    alert(searchQuery)
    setSearchQuery("")
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <Moviecard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;
