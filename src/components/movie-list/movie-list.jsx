import React from 'react';
import { connect } from 'react-redux';
import VisibilityInputFilter from '../visibility-filter-input/visibility-filter-input';
import MovieCard from '../movie-card/movie-card';
import { Col } from 'react-bootstrap';

const MovieList = ({visibilityFilter, movies}) => {
    let filteredMovies = movies;

    if( visibilityFilter !== ''){
        filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
    }

    if(!movies)
        return <div className="main-view" />;
        
    return ( 
        <Col md={12} style={{ margin: '1em'}}>
            <VisibilityInputFilter visibilityFilter={visibilityFilter} />
            {
                filteredMovies.map(m => (
                    <Col md={3} key={m._id}>
                        <MovieCard movie={m} />
                    </Col>
                ))
            }
        </Col>
     );
}

const mapStateToProps = ({visibilityFilter, movies}) =>({
    visibilityFilter,
    movies
});

export default MovieList;