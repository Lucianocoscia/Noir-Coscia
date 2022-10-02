import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  // console.log(id);

  const [productDetail, setProductDetail] = useState([]);

  // firebase
  const db = getFirestore(); // retorna la base de datos

  const getProduct = () => {
    const queryDoc = doc(db, "items", id);

    getDoc(queryDoc)
      .then((response) => {
        console.log(response.id);
        console.log(response.data());
        // setProductDetail(response.data());
        setProductDetail({ id: response.id, ...response.data() });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 0);
    // getProduct();
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="contenedor_detalle">
          <ItemDetail product={productDetail} />
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;

// Apuntes traer prodcs con mockdata

/*     useEffect(() => {
        getItem
        .then((response) => {
            setProductDetail(response.find((item) => item.id === id));
        })
        .catch((error) => console.log(error));
    }, []);

    const getItem = new Promise((resolve) => {
        setTimeout(() => {
        resolve(data);
        }, 5000);
        // resolve(data);
    }); */
