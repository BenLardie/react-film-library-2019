import React from 'react';
import TMDB from './TMDB';

const FilmListing = () => {

    const filmList = TMDB.films.map((film) => {
        return (
            <article className='film-row' key={film.id}>
                <img src={`https://image.tmdb.org/t/p/w780/${film.poster_path}`} alt={film.title} />
                    <div className='film-summary'>
                        <h1>{film.title}</h1>
                        <p>{new Date(film.release_date).getFullYear()}</p>
                    </div>
            </article>
        )
    })


    return (
        <div className='film-list'>
            <h1 className='section-title'>FILMS</h1>
            {filmList}
        </div>
    )
}

export default FilmListing;


