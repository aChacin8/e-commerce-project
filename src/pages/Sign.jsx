import { Card, Button, Form } from 'react-bootstrap';
import userService from '@/services/userService';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const { registerUserService } = userService;

const Sign = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await registerUserService(data);
            if (response.status === 201) {
                navigate('/login');
                console.log('Usuario creado exitosamente', response);
            }
        } catch (error) {
            console.log('Ocurrio un error en la creacion de usuario', error);
        }
    }

    return (
        <Card style={{ width: '22rem' }} className='justify-content-center mx-auto mt-5'>
            <Card.Body className='text-center'>
                <Card.Title>Sign Up</Card.Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className='mb-3 mt-5'>
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control
                            type='text'
                            name='firstName'
                            placeholder='First name'
                            required
                            {...register('firstName')}
                        />
                        <p>{errors.firstName?.message}</p>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control
                            type='text'
                            name='lastName'
                            placeholder='Last name'
                            required
                            {...register('lastName')}
                        />
                        <p>{errors.lastName?.message}</p>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Gender:</Form.Label>
                        <Form.Select
                            className='mb-3'
                            name='gender'
                            onChange={() => { }}
                            {...register('gender')}
                            required
                        >
                            <option value='M'>Male</option>
                            <option value='F'>Female</option>
                            <option value='O'>other</option>
                        </Form.Select>
                        <p>{errors.gender?.message}</p>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type='email'
                            name='email'
                            placeholder='name@example.com'
                            required
                            {...register('email')}
                        />
                        <p>{errors.email?.message}</p>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            name='password'
                            placeholder='Password'
                            required
                            {...register('password')}
                        />
                        <p>{errors.password?.message}</p>
                    </Form.Group>

                    <Button variant='success' type='submit' className='w-100 btn btn-outline-primary'>Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Sign;