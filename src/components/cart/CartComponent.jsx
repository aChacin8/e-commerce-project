import { useShoppingCartContext } from '@/hooks/useShoppingCartContext';
import { Card, Button } from 'react-bootstrap';
import '@/styles/ShoppingCart.scss'

const CartComponent = () => {
    const { cart, setCart, increaseQuantity, decreaseQuantity } = useShoppingCartContext();
    
    return (

        <>
            <div className='shop__products' >
    
                {cart.length === 0 ? (
                    <p>Tu carrito está vacío</p>
                ) : (
                    cart.map((item) => (
                        <Card key={item.id} className="shop__card" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Img src={item.image} alt={item.product_name} style={{ width: '10rem' }} />
                                <Card.Title className="shop__card-name">{item.product_name}</Card.Title>
                                <Card.Text className="shop__card-price">Precio: ${item.price}</Card.Text>
                                <Card.Text className="shop__card-quantity">Cantidad: {item.quantity}</Card.Text>
                                <div>
                                    <Button
                                        variant="danger"
                                        onClick={() => decreaseQuantity(item.id)}
                                        className="shopping__card-button me-2"
                                    >
                                        -
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={() => increaseQuantity(item.id)}
                                        className="shopping__card-button"
                                    >
                                        +
                                    </Button>
                                </div>
                                <Button
                                    className='mt-3'
                                    variant='success'
                                    onClick={() => a}
                                >
                                    Comprar
                                </Button>
                            </Card.Body>
                        </Card>
    
                    ))
    
                )}
            </div>
        </>
    );
}

export default CartComponent;