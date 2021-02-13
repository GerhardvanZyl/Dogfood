import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () =>{
    const activeStyle = { color: '#f15b2a'};

    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{' | '}
            <NavLink to="/story" activeStyle={activeStyle}>Stories</NavLink>{' | '}
            <NavLink to="/authorstory" activeStyle={activeStyle}>Author a Story</NavLink>{' | '}
        </nav>
    );
};

export default Header;