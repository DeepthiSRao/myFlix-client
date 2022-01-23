import React from "react";
import { Redirect, Route } from "react-router-dom";
import LoginView from "../login-view/login-view";

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>(
                isLoggedIn ? 
                <Component {...props} />
                :  <Redirect to="/" />
            )}
        />
    );
};

export default PrivateRoute;