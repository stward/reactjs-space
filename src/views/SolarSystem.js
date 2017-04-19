import React from 'react';
import {Link, browserHistory} from 'react-router';

const SolarSystem = (props) => {
  var planetList = props.planets.map(function(item, index) {
    return (
      <div className="planetLink"><Link to={'/solarsystem/' + index}>{item.name}</Link></div>
    )
  })

  return (
    <div>
      {planetList}
      <button className="btn btn-primary" onClick={browserHistory.goBack}>Go Back</button>
    </div>
  )
}

export default SolarSystem;
