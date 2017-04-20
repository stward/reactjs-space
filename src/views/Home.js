import React from 'react';
import {Link} from 'react-router';

const Home = (props) => {
  return (
    <div>
      <h2>You live on {props.homePlanet}</h2>
      <Link to='/solarsystem'>
        Look at the planets of the solar system.
        <img src="/images/home.gif" />
      </Link>
      <a href="/solarsystem">Solar System - just a regular link (not React - this link will cause a page load)</a>
    </div>
  )
}

export default Home;
