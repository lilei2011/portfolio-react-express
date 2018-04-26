import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav class="topNav">
      <div class="pageHeader">
        <span class="headerText">Lei Li</span>
        <img class="portrait" src="images/lei.jpg" alt="Lei pic" />
        <span class="headerText">+ CSS + HTML + Javascript = </span>
      </div>
      <div class="hero">Front end engineer</div>
      <div class="navMenu hover">
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/about" activeClassName="is-active" exact={true}>About</NavLink>
        <NavLink to="/experience" activeClassName="is-active" exact={true}>Experience</NavLink>
        <NavLink to="/projects" activeClassName="is-active" exact={true}>Projects</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
      </div>
    </nav>
  </header>
);

export default Header;
