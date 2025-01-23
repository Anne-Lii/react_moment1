import React from 'react';
import Movie from './Movie';//import av komponenten Movie 
import './MovieList.css';

//Funktionell komponent som visar en lista med filmer
const MovieList: React.FC = () => {

  // En array med filmer
  const movies = [
    { id: 1, title: "The Goonies", year: 1985, seen: true },
    { id: 2, title: "The Notebook", year: 2004, seen: true },
    { id: 3, title: "Pulp Fiction", year: 1994, seen: false },
    { id: 4, title: " Intouchables", year: 2011, seen: true },
    { id: 5, title: "Braveheart", year: 1995, seen: true },
    { id: 6, title: "Master and Commander", year: 2003, seen: true },
  ];

  return (
    <div className='main_content'>
      <h2>Favoriter</h2>
      <div className='movie_content'>

      {/* Itererar över movies-arrayen och skapar en Movie-komponent för varje objekt */}
      {movies.map((movie) => (
        
        //Skickar props
        <Movie 
        key={movie.id} 
        title={movie.title} 
        year={movie.year} 
        seen={movie.seen}
         />
      ))}
      </div>
    </div>
  );
};

export default MovieList;
