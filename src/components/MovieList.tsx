import React from 'react';
import Movie from './Movie';
import './MovieList.css';

const MovieList: React.FC = () => {

  // En array med filmer
  const movies = [
    { title: "The Goonies", year: 1985, seen: true },
    { title: "The Notebook", year: 2004, seen: true },
    { title: "Pulp Fiction", year: 1994, seen: false },
    { title: " Intouchables", year: 2011, seen: true },
    { title: "Braveheart", year: 1995, seen: true },
    { title: "Master and Commander", year: 2003, seen: true },
  ];

  return (
    <div className='main_content'>
      <h2>Favoriter</h2>
      <div className='movie_content'>
      {movies.map((movie, index) => (
        <Movie key={index} title={movie.title} year={movie.year} seen={movie.seen} />
      ))}
      </div>
    </div>
  );
};

export default MovieList;
