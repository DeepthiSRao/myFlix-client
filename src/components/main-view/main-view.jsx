import React from 'react';
import axios from 'axios';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';
import './main-view.scss';
import LoginView from '../login-view/login-view';

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
            <div className="main-view">
                {
                    selectedMovie ?
                        <MovieView 
                            movie={selectedMovie} 
                            onBackClick={(newSelectedMovie) => this.setSelectedMovie(newSelectedMovie)}/>
                        : movies.map((movie) =>(
                            <MovieCard 
                                key={movie._id} 
                                movie={movie} 
                                onMovieClick={(movie) => this.setSelectedMovie(movie)} />
                        ))
                }
            </div>
        );
    }
}

export default MainView;