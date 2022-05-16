import React from 'react';
import { connect } from 'react-redux';
import { Link,   
         useHistory } from 'react-router-dom';
import { Button, 
         Card, 
         Col, 
         Figure, 
         Row} from 'react-bootstrap';

const GenreView = ({genre, moviesByGenre}) => {
    const history = useHistory();

    return ( 
        <Card className="mt-4 mx-auto" style={{ width: "80%" }}>
            <Card.Body>        
                    <Card.Title as="h4" className="text-center label">Genre Info</Card.Title>
                    <div className="genre-name">
                        <span className="label">Name: </span>
                        <span className="value">{genre.Name}</span>
                    </div>
                    <div className="genre-desc">
                        <span className="label">Description: </span>
                        <span className="value">{genre.Description}</span>
                    </div>
                    <div className="text-center align-items-end pt-4">
                        <Button variant="success link" onClick={history.goBack}>
                                <i className="fa fa-arrow-left"></i> Back
                        </Button>
                        <Link to='/'>
                            <Button variant="success link mx-2">Back to Movie List</Button>
                        </Link>
                    </div>
                    <Card.Title as="h4" className="label pt-5 text-center">{genre.Name} Movies</Card.Title>
                    <Row>
                        {
                            !!moviesByGenre ? 
                            moviesByGenre.map((movie) => (
                                !!movie &&
                                <Col xs={12} md={6} lg={4} key={movie._id} className="fav-movie">   
                                    <Figure>
                                        <Link to={`/movies/${movie._id}`}>
                                            <Figure.Image 
                                                src={movie.ImagePath}
                                                alt={movie.Title}
                                                crossOrigin="anonymous"
                                            />
                                            <Figure.Caption>
                                                {movie.Title}
                                            </Figure.Caption>
                                        </Link>
                                    </Figure>
                                </Col>
                            )) 
                            : <Col xs={12}>
                                <p>No movies</p>
                            </Col>
                        }
                    </Row>
            </Card.Body>
        </Card>
    );
}

const mapStateToProps = ({movies}, ownProps) =>{
    const moviesByGenre = movies.filter(m => m.Genre.Name === ownProps.match.params.name);
    const genre = movies.find(m => m.Genre.Name === ownProps.match.params.name).Genre;

    return{
        genre,
        moviesByGenre
    }
}

export default connect(mapStateToProps)(GenreView);