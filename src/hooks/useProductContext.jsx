import {ProductContextComponent} from "@/context/ProductContextComponent";
import { useContext } from "react";

export const useProductContext = () =>{
    return useContext (ProductContextComponent);


}

