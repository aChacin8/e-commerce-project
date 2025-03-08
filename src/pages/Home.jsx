import { useState, useEffect } from "react";
import  {getAllItemService} from '@/services/itemService';
import { Card } from "react-bootstrap";

const Home = () => {
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

    
    return (
        <>
            <h1>Home</h1>
            <div className='d-flex justify-content-center flex-wrap'>
                {itemsList.map((item) => (
                    <Card key={item.id} style={{ width: '18rem' }} className='m-2'>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Card.Text>
                                Price: {item.price}$
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Home;