import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link,   
         useHistory } from 'react-router-dom';
import { Button,
         Card,
         Col,
         Row} from 'react-bootstrap';

import './movie-view.scss';

const MovieView = ({movie}) =>{
    const history = useHistory();

    return(
        <Card className="mt-4 mx-auto" style={{ width: "80%" }}>
            <Row>
                <Col lg={6} md={5} sm={12}>
                    <Card.Img variant="top" src={movie.ImagePath} alt="movie-poster" crossOrigin="anonymous" style={{ height: 540 }}/>
                </Col>
                <Col className="movie-view px-1">
                    <Card.Body> 
                        <div className="movie-title">
                            <span className="label">Title: </span>
                            <span className="value">{movie.Title}</span>
                        </div>
                        <div className="movie-director">
                            <span className="label">Director: </span>
                            <span className="value">{movie.Director.Name}</span>
                        </div>
                        <div className="movie-genre">
                            <span className="label">Genre: </span>
                            <span className="value">{movie.Genre.Name}</span>
                        </div>
                        <div className="movie-description">
                            <span className="label">Description: </span>
                            <span className="value">{movie.Description}</span>
                        </div>
                        <div className="movie-footer text-center align-items-end pt-4">
                            <Button variant="success link" onClick={history.goBack}>
                                <i className="fa fa-arrow-left"></i> Back
                            </Button>                   
                            <Link to={`/directors/${movie.Director.Name}`}>
                                <Button variant="success link">Director</Button>
                            </Link>
                            <Link to={`/genres/${movie.Genre.Name}`}>
                                <Button variant="success link">Genre</Button>
                            </Link>
                        </div>
                    </Card.Body> 
                </Col> 
            </Row>       
        </Card>
    );
}

MovieView.propTypes = {
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

const mapStateToProps = (props, ownProps) =>{
    const movie = props.movies.find(m => m._id === ownProps.match.params.movieId);

    return {
        movie
    }
}

export default connect(mapStateToProps)(MovieView);