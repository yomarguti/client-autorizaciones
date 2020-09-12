import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import './Styles/NavBar.css';
import logo from '../images/logo.svg';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="container-fluid">
        <div className="NavBar__Menu">
          <div className="NavBar__Brand">
            <Link to="/">
              <img alt="logo" src={logo} />
              <span className="font-weight-bold ">Autorización de Voladuras</span>
            </Link>
          </div>
          <NavLink to="/new-authorization" activeClassName="NavBar__Item__Active">
            <span className="NavBar__Item">Nueva Autorización +</span>
          </NavLink>
          <NavLink to="/Profile" activeClassName="NavBar__Item__Active">
            <span className="NavBar__Item">Yomar</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
