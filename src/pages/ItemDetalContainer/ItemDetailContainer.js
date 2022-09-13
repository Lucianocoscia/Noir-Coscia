import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import ItemDetail from '../../Components/ItemDetail/ItemDetail'
import data from '../../Components/MockData/MockData';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const {id} = useParams();
    console.log(id);

    const [productDetail, setProductDetail] = useState([]); 

    useEffect(() => {
        getItem
        .then((response)=>{

            setProductDetail(response.find((item) => item.id === id));
        })
        .catch((error) => console.log((error)));
    }, [])

    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000)
        
    })
  return (
    <>
        <div className='container'>
            <div className='contenedor_detalle'>
                <ItemDetail product={productDetail}/>
            </div>

            

        </div>

    </>

  )
}

export default ItemDetailContainer