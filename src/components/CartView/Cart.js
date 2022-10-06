import React from "react";
import Table from "react-bootstrap/Table";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, subTotal, clear } = useContext(CartContext);
  console.log("cart", cart);

  const navigate = useNavigate();

  /* Inicializo la base de datos */
  const db = getFirestore();

  // Utilizo useState para poder actualizarlo y utilizarlo en todo mi componente
  const [order, setOrder] = useState({
    buyer: {
      name: "",
      phone: 0,
      email: "",
    },
    items: cart,
    total: cart.reduce(
      (valorPasado, valorActual) =>
        valorPasado + valorActual.price * valorActual.quantity,
      0
    ),
    date: moment().format("DD/MM/YYYY, h:mm:ss a"),
  });

  // console.log('orden realizada', order);

  // Creo la orden y primero actuliza el state de la orden, le dejamos el buyer tal cual como esta y actualizamos el item, total y date.
  const createOrder = () => {
    const query = collection(
      db,
      "orden"
    ); /* Busco en mi database la coleccion orden */

    // agrego la nueva orden a la collecion orden de firebase
    addDoc(query, order)
      .then(({ id }) => {
        console.log(id);
        updateStockProduct();
        alert("Felicidades por tu compra");
        alert(`Su id de compra es ${id}`);
      })
      .catch(() =>
        alert("Tu compra no pudo ser completada, intentalo mas tarde.")
      );
  };

  // actualizo la orden segun el stock y cantidades compradas
  const updateStockProduct = () => {

    cart.forEach((product) => {
      const queryUpdate = doc(db, 'items', product.id);

      updateDoc(queryUpdate, {
        category: product.category,
        description: product.description,
        image: product.image,
        price: product.price,
        title: product.title,
        stock: product.stock - product.quantity,
      }).then(() => {
        // siempre selecciona el ultimo del carrito y su id y lo iguala al id del producto 
          if (cart[cart.length - 1].id === product.id) {
            clear();
            navigate("/");
            console.log("stock actualizado");
          }
        })
        .catch(() => {
          console.log("error al actualizar el stock");
        });
    });
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setOrder({
      ...order,
      buyer: {
        ...order.buyer,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className=" mt-4 container" style={{ minHeight: "90vh" }}>
      {cart.length === 0 ? (
        <>
          <h2>No hay productos en tu carrito</h2>
          <Link to={"/products"}>Volver A Comprar</Link>
        </>
      ) : (
        <>
          <div className="container">
            <Table className="mt-4" striped bordered hover>
              <thead>
                <tr className="text-center">
                  <th>#ID</th>
                  <th>Producto</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>SubTotal</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>

              {cart.map((item) => (
                <tbody key={item.id} className="text-center">
                  <tr>
                    <td>{item.id}</td>
                    <td>
                      <img
                        style={{ width: 200, height: 200, objectFit: "cover" }}
                        src={item.image}
                        alt={`${item.title}`}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      $
                      {item.quantity > 1
                        ? item.price * item.quantity
                        : item.price}
                    </td>
                    <td></td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        Eliminar producto
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
              <thead>
                <tr className="text-center">
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>{subTotal()}</th>
                  <th></th>
                </tr>
              </thead>
            </Table>
            <Link to={"/products"}>Volver A Comprar</Link>
            <button onClick={createOrder}>Crear Orden</button>

            {/* <button onClick={updateItems} >Editar Orden</button> */}
          </div>

          <div className="container text-center">
            <div>
              <label>Nombre</label>
              <input
                name="name"
                type={"text"}
                value={order.buyer.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Telefono</label>
              <input
                name="phone"
                type={"number"}
                value={order.buyer.phone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                name="email"
                type={"email"}
                value={order.buyer.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

