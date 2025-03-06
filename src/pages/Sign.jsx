import { Card, Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import registerUserService from '@/services/userService';
const Sign = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
            try {
                const response = await registerUserService (data);
                if (response === 201) {
                    navigate('/login');
                    console.log('Usuario creado exitosamente', response);
                }
            } catch (error) {
                console.log('Ocurrio un error en la creacion de usuario', error);
            }
        }
    return (
        <Card style={{ width: '22rem' }} className='justify-content-center mx-auto mt-5' > 
            
            <Card.Body className='text-center'>
                <Card.Title>Sign Up</Card.Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className='mb-3 mt-5' controlId='formBasicEmail'>
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control 
                            type='text' 
                            name= 'firstName'
                            placeholder='First name' 
                            required 
                        />
                        {...register('firstName')}
                    </Form.Group>
                    
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control 
                            type='text' 
                            name= 'lastName'
                            placeholder='Last name' 
                            required 
                        />
                        {...register ('lastName')}
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control  
                            type='email' 
                            name = 'email'
                            placeholder='Enter email' 
                            required 
                        />
                        {...register('email')}
                        <p>{errors.email?.message}</p>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control  
                            type='password' 
                            name='password'
                            placeholder='Password' 
                            required />
                        {...register('password')}
                        <p>{errors.password?.message}</p>
                    </Form.Group>
                    
                    <Button variant='success' type='submit' className='me-2'>
                        <NavLink to={'/Login'}>Login</NavLink>
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Sign;