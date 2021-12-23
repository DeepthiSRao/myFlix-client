import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';
import './index.scss';

class MyFlixApplication extends React.Component{
    render(){
        return(
            <div className="my-flix">
                <MainView />
            </div>
        );
    }
}

//to find root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);