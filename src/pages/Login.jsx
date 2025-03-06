import {useForm} from 'react-hook-form';;
import { useNavigate } from 'react-router-dom';
import { Card, Button, Form } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import userService from '@/services/userService';

const Login = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate(); //Redirigir a otra ruta.
    const onSubmit = (data) => {
        try {
            const response = loginUserService (data);
            if (response === 200) {
                navigate('/');
                console.log('Usuario atenticado', response);
            }
        } catch (error) {
            console.log('Ocurrio un error', error);
        }
    }
    
    return (
        <Card style={{ width: '22rem' }} className='justify-content-center mx-auto mt-5' > 
            
            <Card.Body>
                <Card.Title>Login</Card.Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            {...register('email')}
                            required 
                        />
                        <p>{errors.email?.message}</p>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            {...register('password')}
                            required 
                        />
                        <p>{errors.password?.message}</p>
                    </Form.Group>
                    
                    <Button variant="success" type="submit" className="me-2" required>Login</Button>
                    <Button variant="success" type="submit" className="me-2">
                        <NavLink to="/Sign">Register</NavLink>
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Login;