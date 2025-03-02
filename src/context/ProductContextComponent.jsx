import { createContext, useState, useEffect } from "react";
import products from '@/api/db.json';

const ProductContextComponent = createContext();

const ProductProvider = ({ children }) => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [search, setSearch] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setList(products);
            setLoading(false);
        }, 3000);
    }, []);

    const data = {
        list,
        loading,
        selectedProduct,
        setSelectedProduct,
        search,
        setSearch,
    };

    return (
        <ProductContextComponent.Provider value={data}>
            {children}
        </ProductContextComponent.Provider>
    );
};

export { ProductContextComponent, ProductProvider };