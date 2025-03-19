import { useShoppingCartContext } from '@/hooks/useShoppingCartContext';
import CartComponent from '@/components/cart/CartComponent'
import ButtonCart from '@/components/cart/ButtonCart';

const ShoppingCart = () => {
    const { cart, setCart } = useShoppingCartContext();
    
    return (
        <>
            <CartComponent/>
            <ButtonCart/>

        </>
    );
}

export default ShoppingCart;
