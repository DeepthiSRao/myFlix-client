import React from 'react';
import PropTypes from 'prop-types';
import { Card, 
         Form, 
         Button } from 'react-bootstrap';
         
import './login-view.scss';

const LoginView = ({onLoggedIn}) => {
    const [userData, setUserData] = React.useState({
        username : '',
        password: ''
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
        onLoggedIn(userData.username);
    }

    return ( 
        <Card className="login-container">
            <Card.Body>
                <Card.Title as="h3" className="text-center">Login Page</Card.Title>
                <Form>
                    <Form.Group controlId="username" className="mb-3">
                        <Form.Label>Username: </Form.Label>
                        <Form.Control 
                            type="text" 
                            name="username" 
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
                    <Button 
                        type="submit"
                        className="login-btn"
                        disabled={userData.username === '' && userData.password.length === ''} 
                        onClick={handleSubmit}>
                            Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
     );
}
 
LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired,
}

export default LoginView;




