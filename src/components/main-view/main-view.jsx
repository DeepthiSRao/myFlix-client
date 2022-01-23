import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import MovieCard from '../movie-card/movie-card';
import RegisterationView from '../registration-view/registration-view';
import LoginView from '../login-view/login-view';
import MovieView from '../movie-view/movie-view';
import DirectorView from '../director-view/director-view';
import GenreView from '../genre-view/genre-view';
import MyNavbar from '../nav-bar/nav-bar';
import ProfileView from '../profile-view/profile-view';
import { setMovies } from '../../actions';
import { API_URL } from '../../utils/constant';
import { Row,
         Col } from 'react-bootstrap';

import './main-view.scss';
import PrivateRoute from './PrivateRoute';
import MovieList from '../movie-list/movie-list';

class MainView extends React.Component {
    constructor(){
        super();
        this.state = {
            user: null
        };
    }
    
    componentDidMount(){
        const accessToken = localStorage.getItem('token');

        if(accessToken !== null){
            this.setState({
                user: JSON.parse(localStorage.getItem('user'))
            });
            this.getMovies(accessToken);
        }  
    }

    getMovies(token){
        axios.get(`${API_URL}/movies`,{
            headers: { Authorization: `Bearer ${token}`}
        })
        .then( response =>{
            this.props.dispatch(setMovies(response.data));
        })
        .catch(error => {
            console.log(error);
        });
    }

    onLoggedIn(authData){
        this.setState({
            user : authData.user
        });

        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', JSON.stringify(authData.user));
        this.getMovies(authData.token);
    }

    onLogout(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.setState({
            user: null
        });
    }

    render() {
        const { user } = this.state; 
        const isLoggedIn = !!user;
        console.log(user);
        return (
            <Router>
                <Row className="main-view justify-content-md-center">
                <MyNavbar />

                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) =>
                            isLoggedIn ? <MovieList /> : <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                        }
                    />
                    <PrivateRoute path="/movies/:movieId" isLoggedIn component={MovieView} /> 
                    <PrivateRoute path="/directors/:name" isLoggedIn component={DirectorView} /> 
                    <PrivateRoute path="/genres/:name" isLoggedIn component={GenreView} />                  
                    <PrivateRoute path="/movie" isLoggedIn component={MovieList} /> 
                    <PrivateRoute path="/profile" isLoggedIn component={ () => <ProfileView user={user} /> } />                       
                </Switch>
                </Row>             
            </Router>
        );
    }
}

const mapStateToProps = ({movies}) => ({
    movies
});

export default connect(mapStateToProps)(MainView);