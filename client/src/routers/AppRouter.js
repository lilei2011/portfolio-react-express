import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import ExperiencePage from '../components/ExperiencePage';
import ProjectsPage from '../components/ProjectsPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import Footer from '../components/Footer';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={AboutPage} exact={true} />
        <Route path="/experience" component={ExperiencePage} exact={true} />
        <Route path="/projects" component={ProjectsPage} exact={true} />    
        <Route path="/contact" component={ContactPage} exact={true}/>
        <Route component={HomePage} /> 
      </Switch>
      <Footer />
    </div>
    
  </BrowserRouter>
);

export default AppRouter;
