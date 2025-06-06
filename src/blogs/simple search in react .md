---
title: "simple search in react"
date: "2025-06-06"
author: "Pritam Das"
tags: ["coding", "react", "search", "clean-code", "best-practices"]
---

## 🎯 Live Search in React

In many applications, you'll often need a search feature — for example, searching movies from a list or finding users in a user directory. In this tutorial, we’ll build a simple **live search** React app that filters movies based on user input.

We’ll create three files:

- `MovieList.jsx` — main component to render the list
- `Searchbox.jsx` — a reusable search input field
- `movieList.js` — static movie data file

---

### 📁 1. `MovieList.jsx`

```jsx
import { useState } from "react";
import Searchbox from "./Searchbox";
import movieList from "../data/movieList";

function MovieList() {
  const [searchMovie, setSearchMovie] = useState("");

  const searchedMovies = movieList.filter((movie) =>
    movie.name.toLowerCase().includes(searchMovie.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        🎬 Top Movies
      </h1>

      <Searchbox searchMovie={searchMovie} setSearchMovie={setSearchMovie} />

      <ul className="mt-6 grid gap-4">
        {searchedMovies.length > 0 ? (
          searchedMovies.map((movie) => (
            <li
              key={movie.id}
              className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center hover:shadow-lg transition"
            >
              <div className="text-lg font-medium text-gray-900">
                {movie.name}
              </div>
              <div className="text-sm font-semibold text-blue-600">
                IMDb: {movie.imdb}
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No matching movies found.
          </p>
        )}
      </ul>
    </div>
  );
}

export default MovieList;

function Searchbox({ searchMovie, setSearchMovie }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="🔍 Search Movies..."
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
    </div>
  );
}

export default Searchbox;

movieList.js

const movieList = [
  { id: 1, name: "The Shawshank Redemption", imdb: 9.3 },
  { id: 2, name: "The Godfather", imdb: 9.2 },
  { id: 3, name: "The Dark Knight", imdb: 9.0 },
  { id: 4, name: "12 Angry Men", imdb: 9.0 },
  { id: 5, name: "Schindler's List", imdb: 8.9 },
  { id: 6, name: "The Lord of the Rings: The Return of the King", imdb: 8.9 },
  { id: 7, name: "Pulp Fiction", imdb: 8.9 },
  { id: 8, name: "Forrest Gump", imdb: 8.8 },
  { id: 9, name: "Inception", imdb: 8.8 },
  { id: 10, name: "Fight Club", imdb: 8.8 },
  { id: 11, name: "The Matrix", imdb: 8.7 },
  { id: 12, name: "Goodfellas", imdb: 8.7 },
  { id: 13, name: "The Empire Strikes Back", imdb: 8.7 },
  { id: 14, name: "Interstellar", imdb: 8.6 },
  { id: 15, name: "Parasite", imdb: 8.5 }
];

export default movieList;
```
