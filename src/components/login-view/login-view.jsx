import React from 'react';
import { API_URL } from '../../utils/constant';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Card, 
         Form, 
         Button } from 'react-bootstrap';
        
import './login-view.scss';
import { validate } from '../../utils/validate';
import { useState } from 'react';

const LoginView = ({onLoggedIn}) => {
    const [userData, setUserData] = React.useState({
        username : '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const {name, value} = e.target;
        let error = validate(name, value);
        setErrors((prevErr) =>{
            return {
                ...prevErr,
                ...error
            }
        });

        setUserData((prevState) =>({
            ...prevState,
            [name] : value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault(); 
        const { username:Username, password: Password } = userData;

        //form can be submitted if there are no validation errors. 
        let isValid = Object.values(errors).every(error => error.length === 0);
        console.log(isValid);

        isValid && 
        axios.post(`${API_URL}/login`,{
                Username,
                Password
            })
             .then(response =>{
                const data = response.data;
                data && onLoggedIn(data);
             })
             .catch(e =>{
                console.log('no such user exists!!!');
             });
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
                            value={userData.username || ''}
                            onChange={handleChange}
                            placeholder="Enter username here"
                            isInvalid={!!errors.username}
                            required />
                        <Form.Control.Feedback type="invalid">
                            {errors.username}
                        </Form.Control.Feedback>
                    </Form.Group>                           
                    <Form.Group controlId="password" className="mb-3"> 
                        <Form.Label>Password: </Form.Label> 
                        <Form.Control 
                            type="password" 
                            name="password" 
                            value={userData.password || ''}
                            onChange={handleChange}
                            placeholder="Enter password here"
                            isInvalid={!!errors.password}
                            required />                       
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button 
                        type="submit"
                        className="login-btn"
                        disabled={!userData.email && !userData.password}
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




