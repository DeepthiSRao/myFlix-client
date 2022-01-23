import React from 'react';
import { connect } from 'react-redux';
import VisibilityInputFilter from '../visibility-filter-input/visibility-filter-input';
import MovieCard from '../movie-card/movie-card';
import { Col, Row } from 'react-bootstrap';

const MovieList = ({visibilityFilter, movies}) => {
    let filteredMovies = movies;

    if( visibilityFilter !== ''){
        filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
    }

    if(!movies)
        return <div className="main-view" />;
        
    return (
        <>
            <h1 className="header">Movie List</h1>
            <VisibilityInputFilter visibilityFilter={visibilityFilter} />
            {
                filteredMovies.map(m => (
                    <Col md={4} key={m._id} className="g-2 px-5">
                        <MovieCard movie={m}/>
                    </Col>
                ))
            }
        </> 
     );
}

const mapStateToProps = ({visibilityFilter, movies}) =>({
    visibilityFilter,
    movies
});

export default connect(mapStateToProps)(MovieList);