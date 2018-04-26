
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
<footer id="footer" className="bg-blue">
		<div className="navMenu">
			<a href="#about">About</a>
			<a href="#experience">Experience</a>
			<a href="#projects">Projects</a>
			<a href="#contact">Contact</a>
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