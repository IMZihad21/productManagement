import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/product" >Add Products</NavLink>
        </div>
    );
};

export default Header;