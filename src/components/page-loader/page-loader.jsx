import React from 'react';
import loaderImg from 'url:./loader.gif';
import { connect } from 'react-redux';
import './loader.scss';

const PageLoader = ({loading}) => {
    if(!loading) 
        return null;

    return ( 
        <div className="loading-container">
            <div className="loading">
                <img src={loaderImg} />
                <p>Loading...</p>
            </div>
      </div>
    );
}

const mapStateToProps = ({loading}) =>({
    loading
});

export default connect(mapStateToProps)(PageLoader);