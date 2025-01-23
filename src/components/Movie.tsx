import React from 'react';
import './Movie.css'

interface MovieProps {
    title: string;
    year: number;
    seen: boolean;
}

const Movie: React.FC<MovieProps> = ({ title, year, seen }) => {
    return (
      <div className='oneMovie'>
        <h2>{title} ({year})</h2>
        <p>Har jag sett denna film: {seen ? "Ja" : "Nej "}</p>
      </div>
    );
};

export default Movie;