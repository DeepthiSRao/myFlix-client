import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';
import LoginView from '../login-view/login-view';
import { API_URL } from '../../utils/constant';
import { Row,
         Col } from 'react-bootstrap';

import './main-view.scss';

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

    setSelectedMovie(newSelectedMovie){
        this.setState({
            selectedMovie: newSelectedMovie
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
    
    render() {
        const { movies, selectedMovie, loading, user } = this.state; 

        if(loading){
            return <div className="loading-message">Loading the data.....</div>;
        }

        if(!user){
            return(
                <Row>
                    <Col>
                        <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;
                    </Col>
                </Row>
            ) 
        }

        return (
            <Router>
                <Row className="main-view justify-content-md-center">
                {
                    selectedMovie ?
                        <Col md={8}>
                            <MovieView 
                                movie={selectedMovie} 
                                onBackClick={(newSelectedMovie) => this.setSelectedMovie(newSelectedMovie)}/>
                        </Col>
                        : movies.map((movie) =>(
                            <Col md={4} key={movie._id} className="g-4 px-2">
                                <MovieCard 
                                    movie={movie} 
                                    onMovieClick={(movie) => this.setSelectedMovie(movie)} />
                            </Col>
                        ))
                }
                </Row>
            </Router>
        );
    }
}

export default MainView;