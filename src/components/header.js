import React from 'react';
import { Link } from "react-router-dom";
import '../styles/headerStyle.css';

const Header = props => {
    return (
        <>  
            <div className="header-wrap">
                <header>My React Blog</header>
                <Link to="/" className="home-text">Home</Link> 
            </div>
        </>
    )
};

export default Header;


