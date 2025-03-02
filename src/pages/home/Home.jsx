import { ProductProvider } from '@/context/ProductContextComponent';
import './Home.scss';
import ProductListComponent from '@/components/product-list/ProductListComponent';


const HomePages = () => {
    return (
        <>
        <ProductProvider>
            <h1>Home</h1>
            <ProductListComponent/>
        </ProductProvider>
        </>
    )
}

export default HomePages;