import { useContext } from "react";

import {AuthContextComponent} from "@/context/AuthContext";

export const useAuthContext = () =>{
    
    const context = useContext (AuthContextComponent);
    if (!context) {
        throw new Error ('useAuthContext debe estar dentro del proveedor AuthProvider')
    } else {
        return context; 
    }
}

//Consumidor del contexto