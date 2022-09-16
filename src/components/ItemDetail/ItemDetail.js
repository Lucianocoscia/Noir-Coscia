import React from 'react'
import '../Item/Item.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) => {
    console.log(product);
    const stock = 10;
  return (
    <>
            <img className='img-detalle'  src={product.image} alt={product.title}/>

            <div className='contenedor-detalle'>
              <h3 className='titulo-detalle'>{product.title}</h3>
              <hr className='hr-detalle'/>
              <h3 className='descripcion-detalle'>{product.description}</h3>
              <h4 className='precio-detalle'>Precio: ${product.price}</h4> 
              <ItemCount stock={stock}/>
              <button className='boton-agregar'>Agregar al carrito</button>
            </div>

    </>
  )
}

export default ItemDetail