import React from 'react';

const PortfolioItem = (props) => (
  <div className="section bg-blue" id="experience">
			<h2 className="heading">Experience</h2>
			<div className="box">
				<h4>Front end engineer</h4>
				<p className="company"><a href="">Get Insured</a><span className="period">Sept 2015 - Dec 2017</span></p>
				<p>building web applications on health insurance market place, doing responsive design and accessibility testing for diverse consumer groups.</p>
			</div>
			<div className="box">
				<h4>Front end engineer</h4>
				<p className="company"><a href="">Guildery</a> <span className="period">Apr 2015 - June 2015</span></p>
				<p>helped building user interface of ecommerce website with html, css, javascript</p>
			</div>
			<div className="box">
				<h4>Front end engineer</h4>
				<p className="company"><a href="">First Tech Credit Union</a><span className="period">Sept 2014 - Mar 2015</span></p>
				<p>prototyped and turned wireframes into markups for financial web app, with html, css, Bootstrap, jQuery</p>
			</div>
			<div className="box">
				<h4>Front end engineer trainee</h4>
				<p className="company"><a href="">Coding Dojo Web Camp</a><span className="period">May 2013 - Jul 2013</span></p>
				<p>Learned MVC, and MEAN stack web development tools</p>
			</div>
		</div>
);

export default PortfolioItem;
