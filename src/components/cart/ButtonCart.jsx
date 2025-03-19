import { useShoppingCartContext } from '@/hooks/useShoppingCartContext';
import { Card, Button } from 'react-bootstrap';
import '@/styles/ShoppingCart.scss'


const ButtonCart = () => {
    const { cart, setCart } = useShoppingCartContext();


    return (
        <>
            {cart.length === 0 ? (
                <br />
            ) : (
                <div className='button'>
                    <button className='button__buy' >Comprar Carrito</button>
                    <button className='button__clear'>Vaciar Carrito</button>
                </div>
            )}

        </>
    );
}

export default ButtonCart;