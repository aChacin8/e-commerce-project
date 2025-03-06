import { Card, Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sign = () => {
    return (
        <Card style={{ width: '22rem' }} className='justify-content-center mx-auto mt-5' > 
            
            <Card.Body className="text-center">
                <Card.Title>Sign Up</Card.Title>
                <Form>
                    <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" placeholder="First name" required />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" placeholder="Last name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    
                    <Button variant="success" type="submit" className="me-2">
                        <NavLink to={'/Login'}>Login</NavLink>
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Sign;