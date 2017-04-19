import React, {Component} from 'react';
import SolarSystem from '../views/SolarSystem';

class SolarSystemContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      planets: this.props.planets
    }
  }

  render () {
    return (
      <div>
        <h1>The Planets of the Solar System</h1>
        <div>
          <SolarSystem planets={this.state.planets} />
        </div>
      </div>
    )
  }
}

export default SolarSystemContainer;
