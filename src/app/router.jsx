import { Router } from '@reach/router';
import React from 'react';
import HomePage from '../pages/home';

const AppRouter = () => (
    <Router>
        <HomePage path="/" />
    </Router>
);

export default AppRouter;
