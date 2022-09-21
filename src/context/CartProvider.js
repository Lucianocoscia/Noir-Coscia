import { useState } from "react";
import { CartContext } from "./CartContext";

// export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]); // state local q es mi carrito

    console.log(cart);

    // funcion q agrega productos en mi carrito
    const addToCart = (item, quantity) =>{ 

        console.log(item)

        // Compruebo si existe y ahi le agrego la cantidad
        if (isInCart(item.id)){

          const elementoDuplicado = cart.find ((elemento) => elemento.id === item.id);
          elementoDuplicado.quantity = elementoDuplicado.quantity + quantity;

          alert("Ya esta en el carrito");
          console.log(cart);
        }else{
        setCart([...cart, {...item, quantity}]);
        }
        // console.log('cart', [...cart, {...item, quantity}] ); // le agrego al objeto un propiedad quantity con la cantidad q la trae del item detail en el onAdd
    };

    const isInCart = (id) =>{
      return cart.some((item) => item.id === id)
    }

  //Remover un item del cart usando su id2
  const removeItem = (productId) =>{
    let nuevoArreglo = [];
    cart.forEach((product) =>{
      if(product.id !== productId){
        nuevoArreglo.push(product)
      }
    });
    setCart(nuevoArreglo);

  }

  // Remover todos los items
  const clear =  () =>{
      setCart([])
      console.log(cart);
  }

  return (
    
    <CartContext.Provider value={{ cart, addToCart, clear,  removeItem}}>
        {children}
    </CartContext.Provider>
  );
}

export default CartProvider


// Apuntes

/*   const isInCart = (id) =>{
      // si es true or false juntarlo o no, para q no haya duplicados
      return cart.some((item) => item.id === id) // el some retorna un true or false 
  } */

  /*     useEffect(()=>{ // controlo el montado del Console.log
      console.log(cart);
    }, [cart]); */ // Q se ejecute cada vez q se actualiza el cart. Se ejecuta por default y no se actualiza si no le paso dependecia 
