import React from "react";
import Table from "react-bootstrap/Table";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, subTotal } = useContext(CartContext);
  console.log("cart", cart);

  return (
    <div className=" mt-4 container" style={{minHeight:"90vh"}}>
      {/* <h5 className="text-left">Cart</h5> */}
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
                <tbody className="text-center">
                  <tr key={item.id}>
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
            {/* <Link to={"/products"}>Volver A Comprar</Link> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
