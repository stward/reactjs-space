import React from 'react';

const Home = (props) => {
  return (
    <div>
      <h2>You live on {props.homePlanet}</h2>
      <a href="/solarsystem">
        Let's look at the planets of the solar system.
        <img src="/images/home.gif" />
      </a>
    </div>
  )
}

export default Home;
