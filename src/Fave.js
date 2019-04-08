import React from 'react';

const Fave = () => {

    const handleClick = (event) => {
        event.stopPropagation()
        console.log('click handled cutie')
    }

    return (
        <div className="film-row-fave add_to_queue" onClick={handleClick}>
            <i className="material-icons">add_to_queue</i>
        </div>
    )

}

export default Fave;