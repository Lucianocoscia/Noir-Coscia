import React from 'react'
import '../Item/Item.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({product}) => {
    // console.log(product);
    const stock = 10;

    const [count, setCount] = useState(1);

    const {addToCart} = useContext(CartContext);

    function onAdd(product){
      addToCart(product, count)
    }

    if(count>=10){
      return (
        <>
            
        <img className='img-detalle'  src={product.image} alt={product.title}/>

        <div className='contenedor-detalle'>
          <Link to={"/products"}>Volver</Link>
          <h3 className='titulo-detalle'>{product.title}</h3>
          <hr className='hr-detalle'/>
          <h3 className='descripcion-detalle'>{product.description}</h3>
          <h4 className='precio-detalle'>Precio: ${product.price}</h4> 
          <ItemCount setCount={setCount} count={count} stock={stock}/>
          <Link onClick={ () => onAdd(product) } className='boton-agregar' to={'/cart'}>Terminar compra</Link>

        </div>

        </>
      )

      }  else{
            return(
              <>
                      
                <img className='img-detalle'  src={product.image} alt={product.title}/>

                <div className='contenedor-detalle'>
                  <Link to={"/products"}>Volver</Link>
                  <h3 className='titulo-detalle'>{product.title}</h3>
                  <hr className='hr-detalle'/>
                  <h3 className='descripcion-detalle'>{product.description}</h3>
                  <h4 className='precio-detalle'>Precio: ${product.price}</h4> 
                  <ItemCount setCount={setCount} count={count} stock={stock}/>
                  <Link to={'/cart'} onClick={ () => onAdd(product) } className='boton-agregar'>Agregar al carrito</Link>

                  {/* <button onClick={clear}>Vaciar Carrito</button>
                  <button onClick={()=> removeItem(product.id)}>Eliminar producto</button> */}
                </div>

              </>
            )};
}

export default ItemDetail