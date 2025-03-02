import { Card, Button } from 'react-bootstrap';
import { useProductContext } from '@/hooks/useProductContext';

const ProductListComponent = () => {

    const { list, loading, setSelectProduct, search } = useProductContext();

    console.log(list);

    // const filteredProducts = list.filter((product) => {
    //     return product.product_name.toLowerCase().includes(search.toLowerCase());
    // });

    return (
        <>
            {loading ? <h1>Loading...</h1> : filteredProducts.map((product) => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{product.product_name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Button onClick={()=>{setSelectProduct(product)}}>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )
            })
            }
        </>
    );
};

export default ProductListComponent;