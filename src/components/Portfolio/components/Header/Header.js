import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header mt2 mt-ns-0">
      <div className="logo ph3">
        <h2>
          <Link to="/">David Vásquez</Link>
        </h2>
      </div>
      <div className="links">
        <NavLink className="link" exact to="/about" activeClassName="active">
          Sobre mí
        </NavLink>
        <NavLink className="link" exact to="/projects" activeClassName="active">
          Proyectos
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
