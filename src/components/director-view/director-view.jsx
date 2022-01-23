import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DirectorView = ({director}) => {
    return ( 
        <div className="director-view d-grid gap-2">
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
                    <span className="value">{director.Birth}</span>
            </div>
            <Link to='/'>
                <Button variant="link">Back to Movie List</Button>
            </Link>
        </div>
    );
}

const mapStateToProps = ({movies}, ownProps) =>{
    const director = movies.find(m => m.Director.Name === ownProps.match.params.name).Director;
    
    return{
        director
    }
}

export default connect(mapStateToProps)(DirectorView);