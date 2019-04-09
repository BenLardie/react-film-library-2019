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

    


    
    const handleClick = (event) => {
        event.stopPropagation()
        console.log('click handled cutie')
        toggle()
        console.log(`fave: ${isFave}`)
        
    }

    

    return (
        <div className="film-row-fave add_to_queue" onClick={handleClick}>
            <i className="material-icons">add_to_queue</i>
        </div>
    )

}

export default Fave;