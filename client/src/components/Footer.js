
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
<footer id="footer" className="bg-blue">
		<div className="navMenu">
			<NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
			<NavLink to="/about" activeClassName="is-active" exact={true}>About</NavLink>
			<NavLink to="/experience" activeClassName="is-active" exact={true}>Experience</NavLink>
			<NavLink to="/projects" activeClassName="is-active" exact={true}>Projects</NavLink>
			<NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
		</div>
		<div className="navMenu">
			<a className="github" href="https://github.com/lilei2011" target="_blank"></a>
			<a className="facebook" href="https://www.facebook.com/leili1230" target="_blank"></a>
			<a className="gmail" href="mailto:lilei2004@gmail.com" target="_blank"></a>
			<a className="linkedin" href="https://www.linkedin.com/in/leilisv/" target="_blank"></a>
		</div>
		
   </footer>
);

export default Footer;