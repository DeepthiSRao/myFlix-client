import React from 'react';
import MovieCard from '../movie-card';
import MovieView from '../movie-view';

class MainView extends React.Component {
    constructor(){
        super();
        this.state = {
            selectedMovie : null,
            movies: [
                {
                    _id: 1,
                    title: "Inception",
                    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
                    genre: ["Action", "Adventure", "Sci-Fi"],
                    imagePath: "https://m.media-amazon.com/images/I/5103Iag9c9L._AC_.jpg"
                },
                {
                    _id: 2,
                    title: "The Shawshank Redemption",
                    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                    genre: ["Drama"],
                    imagePath: "https://m.media-amazon.com/images/I/91jvQ+28WCL._SL1500_.jpg"
                },
                {
                    _id: 3,
                    title: "Gladiator",
                    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
                    genre: ["Action", "Adventure", "Drama"],
                    imagePath: "https://m.media-amazon.com/images/I/61O9+6+NxYL._AC_SL1000_.jpg"
                },
            ]  
        };
    }
    
    setSelectedMovie(newSelectedMovie){
        this.setState({
            selectedMovie: newSelectedMovie
        })
    };

    render() {
        const { movies, selectedMovie } = this.state; 

        return (
            <div className="main-view">
                {
                    movies.length === 0 && <span>The movie list is empty!!</span>
                }
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