import { useContext } from "react";

import {AuthContext} from "@/context/AuthContext";

export const useAuthContext = () =>{
    
    const context = useContext (AuthContext);
    if (!context) {
        throw new Error ('useAuthContext debe estar dentro del proveedor AuthProvider')
    } else {
        return context; 
    }
}

//Consumidor del contexto