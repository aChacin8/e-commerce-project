import { createContext, useState } from "react";

const ShoppingCartContext = createContext(); 

const ShoppingCartProvider = ({children}) => {

    const [cart, setCart] = useState ([]);

    const value = {
        cart,
        setCart
    };
        
    return (

            <ShoppingCartContext.Provider value={value}>
                {children}
            </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext, ShoppingCartProvider};