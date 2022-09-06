
import React from 'react';
import { useState } from 'react';
import { GrFormAdd } from 'react-icons/gr';
import { GrFormSubtract } from 'react-icons/gr';
import './ItemCount.css'

const ItemCount = ({stock}) => {

    const  [items, setItems] = useState(0);

    const suma = () => items < stock ? setItems(items + 1) : alert('Se alcanzo el limite de stock')
    const resta = () => items > 0 ? setItems(items - 1) : alert('No se pueden meter valores negativos')

  return (
    <div className='contenedor' >
        <div className='card'>
          <h5 className='card_titulo '> Remera Oversize</h5>
          <p className='card_titulo '> Stock = {stock}</p>

          <div className='div__button'>
            <button className='button' onClick={resta}> <GrFormSubtract/></button>
            <p className='card_numero_contador' >{items}</p>
            <button className='button' onClick={suma}><GrFormAdd/></button>
          </div>

        </div>
    </div>
  )
}

export default ItemCount;