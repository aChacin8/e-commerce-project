import { useContext } from "react";
import { ShoppingCartContext } from "@/context/ShoppingCartContext"; // Verifica esta ruta

const useShoppingCartContext = () => {
    const context = useContext(ShoppingCartContext);
    if (!context) {
        throw new Error("useShoppingCartContext debe estar dentro del proveedor ShoppingCartProvider");
    }
    return context;
};

export { useShoppingCartContext };
