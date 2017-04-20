import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './App';
import HomeContainer from './containers/HomeContainer';
import SolarSystemContainer from './containers/SolarSystemContainer';
import PlanetContainer from './containers/PlanetContainer';

import './index.css';

render((
  <Router history={browserHistory} >
    <Route path='/' component={App}>
      <IndexRoute component={HomeContainer}/>
      <Route path='/solarsystem' component={SolarSystemContainer}></Route>
      <Route path='/solarsystem/:planetIndex' component={PlanetContainer}></Route>
    </Route>
  </Router>
), document.getElementById('root'));
