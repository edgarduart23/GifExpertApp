import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    
    return (
        <div className="card animate__fadeOutDown">
            <img src= {url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
