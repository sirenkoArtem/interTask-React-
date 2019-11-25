import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <FontAwesomeIcon icon={faBars} className="menu-bar" />
            <ul className="list navbar-menu">
                <li className="navbar-item">
                    <NavLink to="/news">новини</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/city">місто</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/business">бізнес</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/food">їжа</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/style">стиль</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/culture">культура</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/knowledge">знання</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/children">діти</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/kyiv">київ як антистрес</NavLink>
                </li>
            </ul>
            <FontAwesomeIcon icon={faSearch} />
        </div>
    )
}

export default Navbar;