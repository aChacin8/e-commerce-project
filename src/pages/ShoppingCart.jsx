import { useShoppingCartContext } from '@/hooks/useShoppingCartContext';
import { Card, Button } from 'react-bootstrap';
import '@/styles/ShoppingCart.scss'

const ShoppingCart = () => {

    const { cart, setCart } = useShoppingCartContext();

    const increaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            ).filter((item) => item.quantity > 0) // Eliminar productos con cantidad 0
        );
    };

    return (
        <>
            <div className='shop__products'>

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
                                    <Button
                                        variant="danger"
                                        onClick={() => decreaseQuantity(item.id)}
                                        className="shopping__card-button me-2"
                                    >
                                        -
                                    </Button>
                                    <Button
                                        variant="success"
                                        onClick={() => increaseQuantity(item.id)}
                                        className="shopping__card-button"
                                    >
                                        +
                                    </Button>
                                </Card.Body>
                            </Card>
                        
                    ))
                    
                )}
            </div>
        </>
    );
}

export default ShoppingCart;
