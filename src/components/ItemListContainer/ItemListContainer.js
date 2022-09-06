import React from 'react';
import './ItemList.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => {
    const stock = 10;
    return (
        <div>
        <h1 className='mensaje'>{greeting}</h1>
        <ItemCount stock={stock}/>
        </div>

    )
}

export default ItemListContainer;