import React from "react";
import Table from "react-bootstrap/Table";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import moment from 'moment';
import { getFirestore, collection, addDoc, updateDoc, doc} from 'firebase/firestore';


const Cart = () => {
  const { cart, removeItem, subTotal } = useContext(CartContext);
  console.log("cart", cart);
  const db = getFirestore();
  // Creo la orden
  const createOrder = () => {
     /* Inicializo la base de datos */

    // Creo la estructura de mi orden
    const order = {
      buyer: {
        name: 'Luciano',
        phone: 123456789,
        email: 'test@test.com'
      },
      items: cart, 
      total: cart.reduce((valorPasado, valorActual) => valorPasado + valorActual.price * valorActual.quantity,0),
      date: moment().format(),
    };
    console.log(order);

    const query = collection(db, 'orden');
    // agrego la nueva orden a la collecion orden de firebase
    addDoc(query, order)
    .then(({id}) => {
      console.log(id);
      alert('Felicidades por tu compra');
    })
    .catch(()=> alert('Tu compra no pudo ser completada, intentalo mas tarde.'));
  };
// actualizo la orden segun el stock y cantidades compradas
  const updateItems = () =>{
    const idOrder = 'F7oCu08QOfGZ6znuTF2R';
    const order = {
      buyer: {
        name: 'Luciano',
        phone: 123456789,
        email: 'test@test.com'
      },
      items: cart, 
      total: cart.reduce((valorPasado, valorActual) => valorPasado + valorActual.price * valorActual.quantity,0),
      date: moment().format(),
    };

    // Opcional es actualizar el stock
    const queryUpdate = doc(db, 'items', idOrder);
    updateDoc(queryUpdate, order)
    .then((response)=> {
      console.log(response);
    })
    .catch((error)=> {console.log(error);})
  }

  return (
    <div className=" mt-4 container" style={{minHeight:"90vh"}}>
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
                  <tr  >
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
            <button onClick={createOrder} >Crear Orden</button>
            {/* <button onClick={updateItems} >Editar Orden</button> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
