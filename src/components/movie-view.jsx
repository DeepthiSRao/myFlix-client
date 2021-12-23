import React from 'react';

class MovieView extends React.Component{
    render(){
        const { movie, onBackClick } = this.props;

        return(
            <div className="movie-view">
                <div className="movie-poster">
                    <img src={movie.imagePath} alt="movie-poster" crossOrigin="anonymous" />
                </div>
                <div className="movie-title">
                    <span className="label">Title: </span>
                    <span className="value">{movie.title}</span>
                </div>
                <div className="movie-director">
                    <span className="label">Director: </span>
                    <span className="value">{movie.director}</span>
                </div>
                <div className="movie-genre">
                    <span className="label">Genre: </span>
                    <span className="value">{movie.genre.join(', ')}</span>
                </div>
                <div className="movie-description">
                    <span className="label">Description: </span>
                    <span className="value">{movie.description}</span>
                </div>
                <button onClick={() => onBackClick(null) }>Back</button>
            </div>
        );
    }
}

export default MovieView;