import { useState, useEffect } from "react";
import { getAllItemService } from "@/services/itemService";
import { Button, Card } from "react-bootstrap";
import { useShoppingCartContext } from "@/hooks/useShoppingCartContext";
import {useAuthContext} from '@/hooks/useAuthContext';
import { NavLink } from "react-router-dom";

import "@/styles/Home.scss";


const Home = ({ searchItem }) => {
    const [itemsList, setItemsList] = useState([]);
    const { cart, setCart } = useShoppingCartContext();
    const {isAuth} = useAuthContext();

    useEffect(() => {
        const fetchItemsData = async () => {
            try {
                const response = await getAllItemService();
                if (response.status === 200) {
                    setItemsList(response.data);
                }
            } catch (error) {
                console.log("Ocurrió un error", error);
            }
        };
        fetchItemsData();
    }, []);

    const filteredItems = itemsList.filter((item) =>
        item.product_name.toLowerCase().includes(searchItem.toLowerCase())
    );

    const addToCart = (item) => {
        setCart((inicialCart) => {
            const itemExists = inicialCart.find((cartItem) => cartItem.id === item.id);
            
            if (itemExists) {
                return inicialCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...inicialCart, { ...item, quantity: 1 }];
            }
        });
    };

    const alert = () =>{
        return (
            window.alert ('You should Log in first')
        )
    }

    return (
        <>
            <h1 className="home__title">Home</h1>
            <div className="home__products">
                {filteredItems.map((item) => (
                    <Card key={item.id} className="home__card">
                        <Card.Img variant="top" src={item.image}alt={item.product_name} className="home__card-img" />
                        <Card.Body className="home__card-body">
                            <Card.Title className="home__card-title">{item.product_name}</Card.Title>
                            <Card.Text className="home__card-text">{item.description}</Card.Text>
                            <Card.Text className="home__card-price">Price: {item.price}$</Card.Text>
                            <Button 
                                variant="success" 
                                className="home__card-button"
                                onClick={() => {isAuth ? addToCart(item) : alert()}}
                            >
                                Add to Cart
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default Home;
