import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div id="notFound">
            <div className="notFound">
                <div className="notFound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>The page you are looking for does not exist, might have been removed, had its name changed or is temporarily unavailable.</p>
                <Link to="/">Go To Homepage</Link>
            </div>
        </div>
    );
};

export default Error;