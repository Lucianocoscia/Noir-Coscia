import "./itemList.css";
import { useEffect, useState } from "react";
// import data from "../../Components/MockData/MockData";
import ItemList from "../../Components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  console.log(categoryName);

  const [productList, setProductList] = useState([]);

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "items");

    if (categoryName) {
      const queryFilter = query(
        querySnapshot,
        where("category", "==", categoryName)
      );
      getDocs(queryFilter).then((response) => {
        const data = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProductList(data);
      });
    } else {
      getDocs(querySnapshot).then((response) => {
        const data = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProductList(data);
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 0);
    // getProducts();
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

/*     const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(data);
        }, 2000);
    }); */

/*     useEffect(() => {
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
    }, [categoryName]); */
