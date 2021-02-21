import { Router } from '@reach/router';
import React from 'react';
import AboutPage from '../pages/about';
import HomePage from '../pages/home';
import Recipe from '../pages/recipe';

const AppRouter = () => (
    <Router>
        <HomePage path="/" />
        <AboutPage path="/about" />
        <Recipe path="/recipe" />
    </Router>
);

export default AppRouter;
