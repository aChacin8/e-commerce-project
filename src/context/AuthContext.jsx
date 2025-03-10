import { createContext, useState, useEffect } from "react";
import {jwtDecode} from 'jwt-decode';
import { set } from "react-hook-form";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);  //Estoy autenticado
    const [userPayload, setUserPayload] = useState(null); //JWT payload decodificando

    const login = (token) => {
        localStorage.setItem ('token', token);
        const decode = jwtDecode(token);
        setUserPayload (decode);
        setIsAuth(true);
    }

    const logout = () => {
        localStorage.removeItem ('token');
        setUserPayload (null); //se borra el Payload
        setIsAuth(false); //se cierra sesion
    }
    
    useEffect(()=> {
        const token = localStorage.getItem('token');
        if(token){
            const decode = jwtDecode(token);
            setUserPayload(decode);
            setIsAuth(true);
        }
    },[])

    const data = {
        isAuth,
        userPayload,
        login,
        logout,
    };
    
    return(
        <>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
export {AuthContext, AuthProvider};

