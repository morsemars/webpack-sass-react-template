import React from 'react';
import { Link } from '@reach/router';
import './_links.scss';

const Links = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/page">Page</Link>
            </li>
        </ul>
    )
}

export default Links;
