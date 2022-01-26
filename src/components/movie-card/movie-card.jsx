import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, 
         Card } from 'react-bootstrap';
import FavouriteBtn from './favourite-btn';
import './movie-card.scss';

const MovieCard = ({ movie, liked, addFavMovie }) => {
    return(
        <Card className="h-100 gap-1" border="secondary">
            <Card.Img 
                variant="top" 
                src={movie.ImagePath} 
                crossOrigin="anonymous" 
                className="movie-img" />
            <Card.Body>
                <Card.Title as="h4">{movie.Title}</Card.Title>
                <Card.Text >{movie.Description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link to={`/movies/${movie._id}`}>
                    <Button variant="outline-primary link">Open</Button>
                </Link>
                <FavouriteBtn liked={liked} addFavMovie={() => addFavMovie(movie._id)} />
            </Card.Footer>
        </Card>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired,
        }),
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired,
            Birth: PropTypes.string.isRequired,
            Death: PropTypes.string
        }),
        ImagePath: PropTypes.string.isRequired,
    }).isRequired,    
};

export default MovieCard;