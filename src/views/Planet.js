import React from 'react';
import {browserHistory} from 'react-router';

const Planet = (props) => {
  return (
    <div>
      <h2>Stardate: {props.stardate.toString()}</h2>
      <h2>{props.planet.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <div>{props.planet.info}</div>
          <div className="spacer30"></div>
          <button className="btn btn-primary" onClick={browserHistory.goBack}>Go Back</button>
        </div>
        <div className="col-md-6">
          <img src={`/images/planets/${props.planet.image}`} />
        </div>
      </div>
    </div>
  )
}

export default Planet;
