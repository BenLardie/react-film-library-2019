import React from 'react';
import TMDB from './TMDB';
import FilmRow from './Film';


const FilmListing = () => {

    const filmList = TMDB.films.map((film) => {
        return (
            <FilmRow film={film} key={film.id} />
        
        )
    })

    const handleFilterClick = (filter) => {
        if (filter === 'fave') {
            console.log(`Setting filter to ${filter}`)
        } else {
            console.log(`Setting filter to ${filter}`)
        }
    }


    return (
    <div className="film-list">
        <h1 className="section-title">
            FILMS
            </h1>

                <div className="film-list-filters">
                    <div className="film-list-filter" onClick={() => handleFilterClick('all')}>
                        ALL
                        <span className="section-count">{filmList.length}</span>
                        </div>
                        <div className="film-list-filter" onClick={() => handleFilterClick('fave')}>
                        FAVES
                    <span className="section-count">0</span>
                </div>
            </div>
        {filmList}
    </div>

    )
    }

export default FilmListing;
