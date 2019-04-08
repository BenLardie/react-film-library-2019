import React from 'react';
import TMDB from './TMDB';

const FilmListing = () => {

   

   

    return (
        <div className='film-list'>
            <h1 className='section-title'>FILMS</h1>
            <img src={`https://image.tmdb.org/t/p/w780/${TMDB.films[0].poster_path}`} alt={TMDB.films[0].title} />
        <h1>{TMDB.films[0].title}</h1>
        </div>
    )
}

export default FilmListing;


