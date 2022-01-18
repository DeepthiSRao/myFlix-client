import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../actions';
import { Form } from 'react-bootstrap';

const VisibilityInputFilter = ({visibilityFilter, dispatch}) => {
    return ( 
        <Form.Control
            onChange={ e => dispatch(setFilter(e.target.value))}
            value={visibilityFilter}
            placeholder="Filter movie by name"
        />
     );
}

const mapStateToProps = ({visibilityFilter}) => ({
    visibilityFilter
});

export default connect(mapStateToProps)(VisibilityInputFilter);