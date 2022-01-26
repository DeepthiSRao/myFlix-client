import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, 
         Card } from 'react-bootstrap';

const GenreView = ({genre}) => {
    return ( 
        <Card className="mt-4 mx-auto" style={{ width: "60%" }}>
            <Card.Body>
                <div className="genre-name">
                    <span className="label">Name: </span>
                    <span className="value">{genre.Name}</span>
                </div>
                <div className="genre-desc">
                    <span className="label">Description: </span>
                    <span className="value">{genre.Description}</span>
                </div>
                <Link to='/'>
                    <Button variant="success link mt-3">Back to Movie List</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

const mapStateToProps = ({movies}, ownProps) =>{
    const genre = movies.find(m => m.Genre.Name === ownProps.match.params.name).Genre;

    return{
        genre
    }
}

export default connect(mapStateToProps)(GenreView);