import { Router } from '@reach/router';
import React from 'react';
import AboutPage from '../pages/about';
import BlogPage from '../pages/blog';
import ContactPage from '../pages/contact';
import HomePage from '../pages/home';
import Recipe from '../pages/recipe';

const AppRouter = () => (
    <Router>
        <HomePage path="/" />
        <AboutPage path="/about" />
        <Recipe path="/recipe" />
        <BlogPage path="/blog" />
        <ContactPage path="/contact" />
    </Router>
);

export default AppRouter;
