import React from 'react';
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
                <input type="text" name="username" id="username" onChange={handleChange} />                
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={handleChange} />
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" onChange={handleChange} />
                <label htmlFor="dob">DOB: </label>
                <input type="date" name="dob" id="dob" onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>Register</button>
            </form>
        </>
    );
}
 
export default RegisterationView;