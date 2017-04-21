import React, {Component} from 'react';
import Planet from '../views/Planet';

class PlanetContainer extends Component {

  state = {
    planet: null,
    stardate: null
  }

  componentDidMount = () => this.setInfo()

  setInfo = () => {
    var planet = this.props.planets[this.props.params.planetIndex];
    this.setState({planet: planet, stardate: new Date()});
  }

  render () {
    return (
      <div>
        <h1>The Planets of the Solar System</h1>
        <div>
          {this.state.planet && this.state.stardate
            ? <Planet planet={this.state.planet} stardate={this.state.stardate} /> : null}
        </div>
      </div>
    )
  }
}

export default PlanetContainer;
