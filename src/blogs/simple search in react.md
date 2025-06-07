---
title: "Simple Search in React"
date: "2025-06-06"
author: "Pritam Das"
tags: ["coding", "react", "search", "clean-code", "best-practices"]
---

## Simple Search in React

In many apps, you’ll need a search feature — like finding a movie from a list or filtering users by name. Let’s build a very basic live search app using React.

This example filters a static list of movies based on the text entered by the user.

---

## What We'll Build

We’ll use three files:

- `MovieList.jsx` — shows all movies and the search box
- `Searchbox.jsx` — input field for search text
- `movieList.js` — hardcoded list of movies

---

## MovieList.jsx

```
import { useState } from "react";
import Searchbox from "./Searchbox";
import movieList from "../data/movieList";

function MovieList() {
  const [searchMovie, setSearchMovie] = useState("");

  const searchedMovies = movieList.filter((movie) =>
    movie.name.toLowerCase().includes(searchMovie.toLowerCase())
  );

  return (
    <div>
      <h1>Top Movies</h1>
      <Searchbox searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
      <ul>
        {searchedMovies.length > 0 ? (
          searchedMovies.map((movie) => (
            <li key={movie.id}>
              <div>{movie.name}</div>
              <div>IMDb: {movie.imdb}</div>
            </li>
          ))
        ) : (
          <p>No matching movies found.</p>
        )}
      </ul>
    </div>
  );
}

export default MovieList;
```

## Searchbox.jsx

```
function Searchbox({ searchMovie, setSearchMovie }) {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={searchMovie}
      onChange={(e) => setSearchMovie(e.target.value)}
    />
  );
}

export default Searchbox;

```

## movieList.js

```
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

a simple movie search mini project - [movie app](https://projects.taglet.in/movie-search)
