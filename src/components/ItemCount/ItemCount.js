
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
<>
  <div className='div__button'>
              <button className='button1' onClick={resta}> <GrFormSubtract/></button>
              <span className='card_numero_contador' >{items}</span>
              <button className='button1' onClick={suma}><GrFormAdd/></button>
  </div>
</>

  )
}

export default ItemCount;