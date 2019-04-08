import React from 'react';
import TMDB from './TMDB';

const FilmListing = () => {




    return (
        <div className='film-list'>
            <h1 className='section-title'>FILMS</h1>
            <article className='film-row'>
            <img src={`https://image.tmdb.org/t/p/w780/${TMDB.films[0].poster_path}`} alt={TMDB.films[0].title} />
            <div className='film-summary'>
            <h1>{TMDB.films[0].title}</h1>
            <p>{new Date(TMDB.films[0].release_date).getFullYear()}</p>
            </div>
            </article>

        </div>
    )
}

export default FilmListing;


