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
        <h3>{title}</h3>
        <h4>({year})</h4>
        <p>Sett: {seen ? "Ja" : "Nej "}</p>
        <img className='default_picture' src="src/assets/movie.png" alt="" /> {/* BIld av <a href="https://pixabay.com/sv/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=147631">OpenClipart-Vectors</a> från <a href="https://pixabay.com/sv//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=147631">Pixabay</a> */}
        
      </div>
    );
};

export default Movie;

