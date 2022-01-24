import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import { devToolsEnhancer } from 'redux-devtools-extension';
import movieAppReducer from './reducer';
import MainView from './components/main-view/main-view';
import 'font-awesome/css/font-awesome.min.css';
import './index.scss';

const store = createStore( movieAppReducer, devToolsEnhancer() );

class MyFlixApplication extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Container fluid>
                    <MainView />
                </Container>
            </Provider>
        );
    }
}

//to find root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);