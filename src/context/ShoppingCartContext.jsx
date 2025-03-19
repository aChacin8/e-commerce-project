import { createContext, useState } from "react";

const ShoppingCartContext = createContext(); 

const ShoppingCartProvider = ({children}) => {

    const [cart, setCart] = useState ([]);

    const increaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            ).filter((item) => item.quantity > 0) // Eliminar productos con cantidad 0
        );
    };

    const value = {
        cart,
        setCart, 
        increaseQuantity,
        decreaseQuantity
    };
        
    return (

            <ShoppingCartContext.Provider value={value}>
                {children}
            </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext, ShoppingCartProvider};