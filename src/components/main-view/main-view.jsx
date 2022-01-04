import React from 'react';
import axios from 'axios';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';
import LoginView from '../login-view/login-view';
import MyNavbar from '../nav-bar/nav-bar';
import { v4 as uuidv4 } from 'uuid';
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
        this.setState({
            loading: true,
        });

        axios.get('https://my-flix-movie-api.herokuapp.com/movies')
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

    onLoggedIn(user){
        this.setState({
            user
        });
    }

    render() {
        const { movies, selectedMovie, loading, user } = this.state; 

        if(loading){
            return <div className="loading-message">Loading the data.....</div>;
        }

        if(!user){
            return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;
        }

        return (
            <>
                <MyNavbar />
                <Row className="main-view justify-content-md-center">
                {
                    selectedMovie ?
                        <Col md={8}>
                            <MovieView 
                                movie={selectedMovie} 
                                onBackClick={(newSelectedMovie) => this.setSelectedMovie(newSelectedMovie)}/>
                        </Col>
                        : movies.map((movie) =>(
                            <Col md={4} key={movie._id} className="g-4">
                                <MovieCard 
                                    movie={movie} 
                                    onMovieClick={(movie) => this.setSelectedMovie(movie)} />
                            </Col>
                        ))
                }
                </Row>
            </>
        );
    }
}

export default MainView;