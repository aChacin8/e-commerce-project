import {useAuthContext} from '@/hooks/useAuthContext';
import { Card } from 'react-bootstrap';

const Secret = () => {
    const {userPayload} = useAuthContext();
    
    return (
        <>
            <h1>Tipo de Usuario:</h1>
            {
                userPayload?.role === 'ADMIN'
                    ? <Card>
                        <Card.Body>
                            <Card.Title>ADMIN</Card.Title>
                            <Card.Text>
                                Bienvenido Administrador
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    : <Card>
                        <Card.Body>
                            <Card.Title>USER</Card.Title>
                            <Card.Text>
                                Bienvenido Usuario
                            </Card.Text>
                        </Card.Body>
                    </Card>
            }
        </>
    )
}

export default Secret;