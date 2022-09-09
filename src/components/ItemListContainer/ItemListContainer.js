import './ItemList.css';
import { useEffect, useState } from 'react';
import data from '../MockData/MockData';
import ItemList from '../ItemList/ItemList';
import portada from '../../images/portada.jpg'
import portada1 from '../../images/ropa4-byn.jpg'
import portada2 from '../../images/ropa3.jpg'
import Categories from '../Categories/Categories';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts
        .then ((response) =>{
            setProductList(response);
        })
        .catch((error) => console.log((error)));
    }, [])

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })

    return (
        <div>
            <div className='container'>
                <div className='grid_portada'>
                    <img className='img_portada' src={portada1} alt=''/>
                    <img className='img_portada'  src={portada2} alt=''/>
                    <img className='img_portada'  src={portada} alt=''/>
                </div>
            </div>
            <Categories/>
            
            <div className='container'>
                <ItemList lista={productList} />   
            </div>
        </div>

    )
}

export default ItemListContainer;