import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ()=> (
    <div className="jumbotron">
        <h1>Eating my own dogfood</h1>
        <p>the beginnings of a cms</p>
        <Link to="/test" className="btn btn-primary btn-lg">test!!</Link>
    </div>
);

export default HomePage;