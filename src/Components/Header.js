import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header(props) {
    return (
        <div className='Header'>
            <div className='namediv'>
             <span className="coname">Ability Jobs</span>
            </div>
            <div className='btncontainer'>
            <Link to="/">
                <button className='btn'>Home</button>
                </Link>
                <Link to="/aboutus">
                <button className='btn'>About Us</button>
                </Link>
                <Link to="/jobs">
                <button className='btn'>Jobs</button>
                </Link>
            </div>
           
        </div>
    );
}

export default Header;