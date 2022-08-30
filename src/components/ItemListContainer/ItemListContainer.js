// propiedad greeting y mostrar mensaje dentro del contenedor con styling integrado
import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <h1 className='mensaje'>{greeting}</h1>
    )
}

export default ItemListContainer;