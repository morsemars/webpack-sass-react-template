import React from 'react';
import { render } from 'react-dom';
import './src/sass/index.scss';

const App = () => {
    return (
        <h1>HELLO</h1>
    );
}

const root = document.getElementById('root');

render(<App />, root);