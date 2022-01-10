import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import MovieCard from '../movie-card/movie-card';
import RegisterationView from '../registration-view/registration-view';
import LoginView from '../login-view/login-view';
import MovieView from '../movie-view/movie-view';
import DirectorView from '../director-view/director-view';
import GenreView from '../genre-view/genre-view';
import { API_URL } from '../../utils/constant';
import { Row,
         Col } from 'react-bootstrap';

import './main-view.scss';
import MyNavbar from '../nav-bar/nav-bar';

class MainView extends React.Component {
    constructor(){
        super();
        this.state = {
            selectedMovie : null,
            movies: [],
            loading: false,
            user: null
        };
    }
    
    componentDidMount(){
        const accessToken = localStorage.getItem('token');

        if(accessToken !== null){
            this.setState({
                user: localStorage.getItem('user')
            });
            this.getMovies(accessToken);
        }  
    }

    getMovies(token){
        this.setState({
            loading: true,
        });
        axios.get(`${API_URL}/movies`,{
            headers: { Authorization: `Bearer ${token}`}
        })
        .then( response =>{
            this.setState({
                movies: response.data,
                loading: false
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    onLoggedIn(authData){
        console.log(authData);
        this.setState({
            user : authData.user.Username
        });

        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.getMovies(authData.token);
    }

    onLogout(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.setState({
            user: null
        });
    }
    
    if(loading){
        return <div className="loading-message">Loading the data.....</div>;
    }

    render() {
        const { movies, selectedMovie, loading, user } = this.state; 

        return (
            <Router>
                <Route exact path="/" render={() => {
                    if(!user)
                        return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                    else
                        return <MyNavbar user={user} />
                }} />
                <Row className="main-view justify-content-md-center">
                    {/* 1. Default path */}
                    <Route exact path="/" render={() => {
                        if(user && movies.length === 0)
                            return <div className="main-view">No data available to display!!!!</div>
                        
                        return movies.map((movie) =>(
                                <Col md={4} key={movie._id} className="g-4 px-2">
                                    <MovieCard movie={movie} />
                                </Col>
                        ));
                    }} />  
                    {/* 2. Register endpoint */}
                    <Route path="/register" render={() => {
                        if(user) return <Redirect to="/" />
                        return(
                            <Col>
                                <RegisterationView />
                            </Col>
                        );
                    }} />
                    {/* 3.Movie end point */}
                    <Route path="/movies/:movieId" render={({ match, history }) => {
                        if(!user){
                            return (
                                <Col>
                                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                                </Col>
                            );
                        }
                        if(movies.length === 0)
                            return <div className="main-view">No data available to display!!!!</div>
                        
                        return(
                            <Col md={8}>
                                <MovieView
                                    movie={movies.find(m => m._id === match.params.movieId)} 
                                    onBackClick={() => history.goBack() }
                                />
                            </Col>
                        );
                    }} />
                {/* 4. Director Route */}
                <Route path="/directors/:name" render={({ match, history }) =>{
                    if(!user){
                        return (
                            <Col>
                                <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                            </Col>
                        );
                    }
                    if(movies.length === 0)
                            return <div className="main-view">No data available to display!!!!</div>
                    console.log(movies);

                    return(
                        <Col md={8}>
                            <DirectorView
                                director={movies.find(m => m.Director.Name === match.params.name).Director} 
                                onBackClick={() => history.goBack() }
                            />
                        </Col>
                    );
                }} />
                {/* 5. Genre Route */}
                <Route path="/genres/:name" render={({ match, history }) =>{
                    if(!user){
                        return (
                            <Col>
                                <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                            </Col>
                        );
                    }
                    if(movies.length === 0)
                            return <div className="main-view">No data available to display!!!!</div>
                        
                    return(
                        <Col md={8}>
                            <GenreView
                                genre={movies.find(m => m.Genre.Name === match.params.name).Genre} 
                                onBackClick={() => history.goBack() }
                            />
                        </Col>
                    );
                }} />
                </Row>             
            </Router>
        );
    }
}

export default MainView;