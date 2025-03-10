import {useForm} from 'react-hook-form';;
import { Card, Button, Form } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import {loginUserService} from '@/services/userService';
import { useAuthContext } from '@/hooks/useAuthContext';


const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate(); //Redirigir a otra ruta.
    const {login} = useAuthContext(); //Consumir el contexto de autenticacion.

    const onSubmit = async (data) => {
        
        try {
            const response = await loginUserService (data);
            if (response.status === 200) {
                navigate('/');
                console.log('Usuario atenticado', response);
                login(response.data.token); //utiliza login de contexto y decodifica el token
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
                    <Form.Group className='mb-3 mt-5' >
                        <Form.Label>Email:</Form.Label>
                        <Form.Control 
                            type='email' 
                            name='email'
                            placeholder='Enter email' 
                            {...register('email')}
                            required 
                        />
                        <p>{errors.email?.message}</p>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type='password' 
                            name='password'
                            placeholder='Password' 
                            {...register('password')}
                            required 
                        />
                        <p>{errors.password?.message}</p>
                    </Form.Group>
                    
                    <Button variant='success' type='submit' className='me-2' required>Login</Button>
                    <Button variant='success' type='submit' className='me-2'>
                        <NavLink to='/Sign'>Register</NavLink>
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Login;