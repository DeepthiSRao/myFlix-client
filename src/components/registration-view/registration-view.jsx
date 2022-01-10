import React from 'react';
import { Card, 
         Form, 
         Button } from 'react-bootstrap';

import './registration-view.scss';

const RegisterationView = () => {
    const [userData, setUserData] = React.useState({
        username : '',
        password: '',
        email: '',
        dob: ''
    });
    
    const handleChange = e => {
        const {name, value} = e.target;
        setUserData((prevState) =>({
            ...prevState,
            [name] : value,
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(userData);
    }

    return (
        <Card className="reg-container">
            <Card.Body>
                    <Card.Title as="h3" className="text-center">Registration Page</Card.Title>
                    <Form>
                        <Form.Group controlId="username" className="mb-3">
                            <Form.Label>Username: </Form.Label>
                            <Form.Control 
                                type="text" 
                                name="username" 
                                onChange={handleChange}
                                placeholder="Enter email here"/>
                        </Form.Group>                           
                        <Form.Group controlId="email" className="mb-3"> 
                            <Form.Label>Email: </Form.Label> 
                            <Form.Control 
                                type="email" 
                                name="email" 
                                onChange={handleChange}
                                placeholder="Enter email here"/>
                        </Form.Group>
                        <Form.Group controlId="password" className="mb-3"> 
                            <Form.Label>Password: </Form.Label> 
                            <Form.Control 
                                type="password" 
                                name="password" 
                                onChange={handleChange}
                                placeholder="Enter password here"/>
                        </Form.Group>
                        <Form.Group controlId="dob" className="mb-3"> 
                            <Form.Label>Date of Birth: </Form.Label> 
                            <Form.Control 
                                type="date"
                                name="dob" 
                                onChange={handleChange}
                                placeholder="Enter date of birth here"/>
                        </Form.Group>
                        <Button 
                            type="submit"
                            className="reg-btn"
                            disabled={userData.username === '' && userData.password.length === ''} 
                            onClick={handleSubmit}>
                                Register
                        </Button>
                    </Form>
            </Card.Body>
        </Card>
    );
}

export default RegisterationView;