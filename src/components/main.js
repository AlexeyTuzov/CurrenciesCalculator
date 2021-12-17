import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './home.js';
import ConverterWrap from './converterWrap.js';
import CoursesWrap from './coursesWrap.js';

const Main = () => {

return (
        <Switch>
            <Route path='/converter' component={ConverterWrap} />
            <Route path='/courses' component={CoursesWrap} />
            <Route path='/' component={Home}/>
            <Redirect to='/' />
        </Switch>
);

};

export default Main;