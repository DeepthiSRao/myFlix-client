import React from 'react';
import PropTypes from 'prop-types';
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
        <>
            <h1>User Registration Page</h1>
            <form>
                <label htmlFor="username">Username: </label>
                <input type="text" 
                    name="username"
                    placeholder="Enter username" 
                    onChange={handleChange} 
                    required />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter email"
                    onChange={handleChange} 
                    required />                
                <label htmlFor="password">Password: </label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Enter password"
                    onChange={handleChange} 
                    minLength={5}
                    required />
                <label htmlFor="email">Email: </label>
                
                <label htmlFor="dob">DOB: </label>
                <input 
                    type="date" 
                    name="dob"
                    placeholder="Enter date of birth" 
                    onChange={handleChange} 
                    required />
                <button type="submit" onClick={handleSubmit}>Register</button>
            </form>
        </>
    );
}

export default RegisterationView;