import React, {Component} from 'react';
import Planet from '../views/Planet';

class PlanetContainer extends Component {

  constructor (props) {
    super(props);
    var planet = this.props.planets[this.props.params.planetIndex];
    this.state = {
      planet: planet,
      stardate: this.props.stardate
    }
  }

  render () {
    return (
      <div>
        <h1>The Planets of the Solar System</h1>
        <div>
          <Planet planet={this.state.planet} stardate={this.state.stardate} />
        </div>
      </div>
    )
  }
}

export default PlanetContainer;
