import "./itemList.css";
import { useEffect, useState } from "react";
import data from "../../Components/MockData/MockData";
import ItemList from "../../Components/ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const { categoryName } = useParams();
    console.log(categoryName);

    const [productList, setProductList] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(data);
        }, 2000);
    });

    useEffect(() => {
        getProducts
        .then((response) => {
            if (categoryName) {
            setProductList(
                response.filter((item) => item.category === categoryName)
            );
            } else {
            setProductList(response);
            }
        })
        .catch((error) => console.log(error));
    }, [categoryName]);



    return (
        <div>
            <div className="container">
                <ItemList lista={productList} />
            </div>
        </div>
    );
};

export default ItemListContainer;
