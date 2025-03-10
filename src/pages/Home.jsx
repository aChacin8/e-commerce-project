import { useState, useEffect } from "react";
import  {getAllItemService} from '@/services/itemService';
import { Button, Card } from "react-bootstrap";
import '@/styles/Home.scss';
const Home = ({searchItem}) => {
    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        const fecthItemsData = async () => {
            try {
                const response = await getAllItemService();

                if (response.status === 200) {
                    setItemsList(response.data);
                }
            } catch (error) {
                console.log('Ocurrio un error', error);
            }
        }
        fecthItemsData();
    },[]);

    const filteredItems = itemsList.filter(item=> {
        return item.product_name.toLowerCase().includes(searchItem.toLowerCase());
    });

    return (
        <>
            <h1 className="home__title">Home</h1>
            <div className='home__products'>
                {filteredItems.map((item) => (
                    <Card key={item.id} className='home__card'>
                        <Card.Img variant="top" src={item.image} className="home__card-img" />
                        <Card.Body className="home__card-body">
                            <Card.Title className="home__card-title">{item.product_name}</Card.Title>
                            <Card.Text className="home__card-text">
                                {item.description}
                            </Card.Text>
                            <Card.Text className="home__card-price">
                                Price: {item.price}$
                            </Card.Text>
                            <Button variant="success" className="home__card-button">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Home;