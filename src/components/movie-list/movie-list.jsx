import React from 'react';
import { connect } from 'react-redux';
import VisibilityInputFilter from '../visibility-filter-input/visibility-filter-input';
import MovieCard from '../movie-card/movie-card';
import { Col, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { PER_PAGE as perPage } from '../../utils/constant';
import './movie-list.scss';

const MovieList = ({visibilityFilter, movies}) => {
    let [pagination, setPagination] = React.useState({
                                        page: 0,
                                        pages: Math.floor(movies.length / perPage),
                                    });

    let filteredMovies = movies.slice(pagination.page * perPage, (pagination.page + 1) * perPage);

    if( visibilityFilter !== ''){
        filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
    }

    if(!movies)
        return <div className="main-view" />;
    
    const handlePageClick = (event) => {
        setPagination((prevState) =>({
            ...prevState,
            page : event.selected
        }));
    }
         
    return (
        <Row className="px-5">
            <h1 className="text-center page-title">Movie List</h1>
            <VisibilityInputFilter visibilityFilter={visibilityFilter}/>
            {
                filteredMovies.map(m => (
                    <Col md={4} key={m._id} className="g-4">
                        <MovieCard movie={m}/>
                    </Col>
                ))
            }
            {
                visibilityFilter === ''
                &&
                <ReactPaginate
                    previousLabel={'prev'}
                    nextLabel={'next'}
                    pageCount={pagination.pages}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            }
        </Row> 
     );
}

const mapStateToProps = ({visibilityFilter, movies}) =>({
    visibilityFilter,
    movies,
});

export default connect(mapStateToProps)(MovieList);