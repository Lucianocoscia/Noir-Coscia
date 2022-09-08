import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ title, price , image}) => {
  const stock = 10;
  return (
    <>
        <div className='card'>
            <img className='card_img' src={image} alt={title}/>
            <h3 className='card_title'>{title}</h3>
            <h4 className='card_price'>{price}</h4> 
            <ItemCount stock={stock}/>
        </div>
    </>

  )
}

export default Item