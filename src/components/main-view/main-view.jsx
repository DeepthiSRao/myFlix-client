import React from 'react';
import axios from 'axios';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';

class MainView extends React.Component {
    constructor(){
        super();
        this.state = {
            selectedMovie : null,
            movies: [],
            loading: false,
        };
    }
    
    componentDidMount(){
        this.setState({
            loading: true,
        });

        axios.get('https://my-flix-movie-api.herokuapp.com/movies')
            .then( response =>{
                console.log(response.data)
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
        })
    };

    render() {
        const { movies, selectedMovie, loading } = this.state; 
        console.log(this.state.movies);

        if(loading){
            return <div>Loading the data.....</div>;
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