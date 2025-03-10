import { useState, useEffect } from "react";
import { getMeUserService } from "@/services/userService";
import { Card, ListGroup } from 'react-bootstrap';


const Dashboard = () => {
    const [userData, setUserData] = useState({});
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await getMeUserService(token)
                if (response.status === 200) {
                    setUserData(response.data)
                    console.log('User Data:', response.data);
                }
            } catch (error) {
                console.log('Ocurrio un error en Dashboard', error)
            }
        }
        fetchUserData()
    }, [token])

    return (
        <>
            <Card style={{ width: '22rem' }} className='justify-content-center mx-auto mt-5' >
                <Card.Body>
                    <Card.Title>Dashboard</Card.Title>
                    <Card.Text className="mt-5">Bienvenid@ {userData.first_name}</Card.Text>
                    <Card.Text>Aquí se muestra tu información.</Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Nombre: {userData.first_name}</ListGroup.Item>
                        <ListGroup.Item>Apellido: {userData.last_name}</ListGroup.Item>
                        <ListGroup.Item>Email: {userData.email}</ListGroup.Item>
                        <ListGroup.Item>Rol: {userData.role}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    )
}

export default Dashboard;