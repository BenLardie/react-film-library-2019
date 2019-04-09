import React, { useState } from 'react';

const Fave = () => {
    const [isFave, setIsFave] =useState(false);

    const toggle = () => {
        if (isFave === false) {
            setIsFave(true)
        } else {
            setIsFave(false)
        }
    }

    const toggleClassName = (isFave ? 'remove_from_queue' : 'add_to_queue');


    
    const handleClick = (event) => {
        event.stopPropagation()
        console.log('click handled cutie')
        toggle()
        console.log(`fave: ${isFave}`)
        
    }

    

    return (
        <div className={`film-row-fave ${toggleClassName}`} onClick={handleClick}>
            <i className="material-icons">{toggleClassName}</i>
        </div>
    )

}

export default Fave;