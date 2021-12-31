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
                    onChange={handleChange} 
                    required={required} />                
                <label htmlFor="password">Password: </label>
                <input 
                    type="password" 
                    name="password" 
                    onChange={handleChange} 
                    minLength={5}
                    required={required} />
                <label htmlFor="email">Email: </label>
                <input 
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    required={required} />
                <label htmlFor="dob">DOB: </label>
                <input 
                    type="date" 
                    name="dob" 
                    onChange={handleChange} 
                    required={required} />
                <button type="submit" onClick={handleSubmit}>Register</button>
            </form>
        </>
    );
}

export default RegisterationView;