import React from 'react';
import PropTypes from 'prop-types';
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
        <>
            <h1>User Login Page</h1>
            <form>
                <label htmlFor="username" >Username: </label>
                <input 
                    type="text" 
                    name="username" 
                    onChange={handleChange}
                    required="required"
                 />              
                <label htmlFor="password" >Password: </label>
                <input 
                    type="password" 
                    name="password" 
                    onChange={handleChange} 
                    required="required" />
                <button 
                    type="submit"
                    disabled={userData.username === '' && userData.password.length === ''} 
                    onClick={handleSubmit}>
                        Login
                </button>
            </form>
        </>
     );
}
 
LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired,
}

export default LoginView;




