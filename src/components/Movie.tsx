import React from 'react';
import './Movie.css' //Importerar komponentspecifik css

//Definierar ett gränssnitt för komponentens props
interface MovieProps {
    title: string; //filmens titel
    year: number;//utgivningsår
    seen: boolean;//Om jag har sett filmen eller ej
}

//funktionell komponent som representerar en enskild film
const Movie: React.FC<MovieProps> = ({ title, year, seen }) => {
    return (
      <div className='oneMovie'>{/* omslutande div för att kunna skicka tillbaka fler element */}
        <h3>{title}</h3> {/* Filmens titel */}
        <h4>({year})</h4> {/* Utgivningsår inom parentes */}
        <p>Sett: {seen ? "Ja" : "Nej "}</p> {/* Har filmen setts eller ej */}

        {/* Standardbild. här kan url för bild läggas in eller statiska bilder */}
        <img className='default_picture' src="src/assets/movie.png" alt="" />
        {/* Bild av <a href="https://pixabay.com/sv/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=147631">OpenClipart-Vectors</a> från <a href="https://pixabay.com/sv//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=147631">Pixabay</a> */}
         
      </div>
    );
};

export default Movie;//Export av komponenten så den går att använda på flera ställen

