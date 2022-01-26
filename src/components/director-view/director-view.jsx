import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import { Button, 
         Card } from 'react-bootstrap';

const DirectorView = ({director}) => {
    return ( 
        <Card className="mt-4 mx-auto" style={{ width: "60%" }}>
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
                <Link to='/'>
                    <Button variant="success link mt-3">Back to Movie List</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

const mapStateToProps = ({movies}, ownProps) =>{
    const director = movies.find(m => m.Director.Name === ownProps.match.params.name).Director;
    
    return{
        director
    }
}

export default connect(mapStateToProps)(DirectorView);