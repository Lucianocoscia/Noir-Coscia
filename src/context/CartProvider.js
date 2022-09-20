import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

// export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]); // state local q es mi carrito

    useEffect(()=>{ // controlo el montado del Console.log
      console.log(cart);
    }, [cart]); // Q se ejecute cada vez q se actualiza el cart. Se ejecuta por default y no se actualiza si no le paso dependecia 

    
    const addToCart = (item, quantity) =>{ // funcion q agrega productos en mi carrito
        console.log(item)
        const existe = cart.find ((elemento) => elemento.id === item.id);
        
        if (existe){
          existe.quantity = existe.quantity + quantity;

          alert("Ya esta en el carrito")
        }else{
        setCart([...cart, {...item, quantity}]);

        }
        // console.log('cart', [...cart, {...item, quantity}] ); // le agrego al objeto un propiedad quantity con la cantidad q la trae del item detail en el onAdd
    };
    
  const removeItem = () =>{
      //Remover un item del cart usando su id2
  }
  const clear = () =>{
      // Remover todos los items
      setCart = ([]);
  }
  
  const isInCart = (id) =>{
      // si es true or false juntarlo o no, para q no haya duplicados
      return cart.some((item) => item.id === id) // el some retorna un true or false 
  }

  return (
    
    <CartContext.Provider value={{ cart, addToCart, clear }}>
        {children}
    </CartContext.Provider>
  );
}

export default CartProvider