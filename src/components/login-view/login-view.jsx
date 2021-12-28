import React from 'react';
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
                <input type="text" name="username" id="username" onChange={handleChange} />                
                <label htmlFor="password" >Password: </label>
                <input type="password" name="password" id="password" onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </>
     );
}
 
export default LoginView;