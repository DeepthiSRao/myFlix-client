import React from 'react';
import { connect } from 'react-redux';
import { Link,   
         useHistory } from 'react-router-dom';
import Moment from 'moment';
import { Button, 
         Card, 
         Col, 
         Figure, 
         Row} from 'react-bootstrap';

const DirectorView = ({director, moviesByDirector}) => {
    const history = useHistory();

    return ( 
        <Card className="mt-4 mx-auto" style={{ width: "80%" }}>
            <Card.Body>
                <Card.Title as="h4" className="text-center label">Personal Info</Card.Title>
                <div className="director-name">
                    <span className="label">Name: </span>
                    <span className="value">{director.Name}</span>
                </div>
                <div className="director-bio">
                    <span className="label">Biography: </span>
                    <span className="value">{director.Bio}</span>
                </div>
                <div className="director-birthyear">
                    <span className="label">Birth: </span>
                    <span className="value">{Moment(director.Birth).format('MM-DD-YYYY')}</span>
                </div>
                <div className="text-center align-items-end pt-4">
                    <Button variant="success link" onClick={history.goBack}>
                            <i className="fa fa-arrow-left"></i> Back
                    </Button>
                    <Link to='/'>
                        <Button variant="success link mx-2">Back to Movie List</Button>
                    </Link>
                </div>
                <Card.Title as="h4" className="label pt-5">Movies dirrected by {director.Name} </Card.Title>
                    <Row>
                        {
                            !!moviesByDirector ? 
                            moviesByDirector.map((movie) => (
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
    const moviesByDirector = movies.filter(m => m.Director.Name === ownProps.match.params.name);
    const director = movies.find(m => m.Director.Name === ownProps.match.params.name).Director;
    
    return{
        director,
        moviesByDirector
    }
}

export default connect(mapStateToProps)(DirectorView);