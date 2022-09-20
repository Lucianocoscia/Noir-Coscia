
import React from 'react';
// import { useState } from 'react';
import { GrFormAdd } from 'react-icons/gr';
import { GrFormSubtract } from 'react-icons/gr';
import './ItemCount.css'

const ItemCount = ({stock , setCount, count}) => {


    // const  [items, setItems] = useState(0);

    // const suma = () => items < stock ? setItems(items + 1) : alert('Se alcanzo el limite de stock');
    // const resta = () => items > 0 ? setItems(items - 1) : alert('No se pueden meter valores negativos');

    const onRemove = () =>{
      if (count === 0){
        alert("No se pueden agregar valores negativos")
        return;

      }

      setCount(count - 1);
    }

    const onAdd = () =>{
      if(count >= stock){
        alert("No contamos con mas stock de este producto")
        return;
      }
        setCount (count + 1)
    };


  return (
<>
  <div className='div__button'>
              <button className='button1' onClick={onRemove}> <GrFormSubtract/></button>
              <span className='card_numero_contador' >{count}</span>
              <button className='button1' onClick={onAdd}><GrFormAdd/></button>
  </div>
</>

  )
}

export default ItemCount;