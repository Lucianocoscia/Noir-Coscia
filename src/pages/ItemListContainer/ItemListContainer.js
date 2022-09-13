import './itemList.css'
import { useEffect, useState } from 'react';
import data from '../../Components/MockData/MockData';
import ItemList from '../../Components/ItemList/ItemList';


const ItemListContainer = () => {


    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts
        .then ((response) =>{
            setProductList(response);
            console.log(response);
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
                <ItemList lista={productList} />   
            </div>
        </div>

    )
}

export default ItemListContainer;