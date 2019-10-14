import React from 'react';
import { render } from 'react-dom';
import './src/sass/index.scss';
import { Router } from '@reach/router';

import Home from './src/js/containers/Home.jsx';
import Page from './src/js/containers/Page.jsx';

const App = () => {
    return (
        <Router>
            <Home path="/"/>
            <Page path="page"/>
            <Home default />
        </Router>
    );
}

const root = document.getElementById('root');

render(<App />, root);