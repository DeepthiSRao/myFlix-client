import React from 'react';
import { render } from 'react-dom';

class MovieCard extends React.Component{
    render(){
        const { movie, onMovieClick } = this.props;

        return(
            <div className="movie-card"  onClick={() => onMovieClick(movie)}>
                {movie.title}
            </div>
        );
    }
}

export default MovieCard;