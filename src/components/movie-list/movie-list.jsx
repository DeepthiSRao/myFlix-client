import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import VisibilityInputFilter from '../visibility-filter-input/visibility-filter-input';
import MovieCard from '../movie-card/movie-card';
import { Col, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { API_URL, PER_PAGE as perPage } from '../../utils/constant';
import './movie-list.scss';

const MovieList = ({visibilityFilter, movies, user}) => {
    let [pagination, setPagination] = React.useState({
                                        page: 0,
                                        pages: Math.floor(movies.length / perPage),
                                    });

    let filteredMovies = movies.slice(pagination.page * perPage, (pagination.page + 1) * perPage);
    let userFavList = user.FavoriteMovies;

    if( visibilityFilter !== ''){
        filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
    }

    if(!movies)
        return <div className="main-view" />;
    
    //handle pagination
    const handlePageClick = (event) => {
        setPagination((prevState) =>({
            ...prevState,
            page : event.selected
        }));
    }
    
    //handle fav movie btn clicked
    const addMovieToUserList = (movieId) =>{
        console.log(movieId);
        const token = localStorage.getItem('token');
        
        axios.post(`${API_URL}/users/${user.Username}/movies/${movieId}`,{},{
            headers: { Authorization: `Bearer ${token}`}
        })
        .then((response) => {
            const updatedUser = response.data;
            console.log("Movie added to fav list");
            localStorage.setItem('user', JSON.stringify(updatedUser));
            window.location.reload();
        })
        .catch((error) => {
            console.log('Adding a movie to user list failed.', error);
        })
    }

    return (
        <Row className="px-5">
            <h1 className="text-center page-title">Movie List</h1>
            <VisibilityInputFilter visibilityFilter={visibilityFilter}/>
            {
                filteredMovies.map(m => (
                    <Col md={4} key={m._id} className="g-4">
                        <MovieCard movie={m} liked={userFavList.includes(m._id)} addFavMovie={(movieId) => addMovieToUserList(movieId)} />
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

const mapStateToProps = ({visibilityFilter, movies}, ownProps) =>({
    visibilityFilter,
    movies,
    user: ownProps.user
});

export default connect(mapStateToProps)(MovieList);