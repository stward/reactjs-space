import React, {Component} from 'react';
import Home from '../views/Home';

class HomeContainer extends Component {

  state = {
    homePlanet: "Earth"
  }

  render () {
    return (
      <div>
        <h1>Welcome to Space</h1>
        <div>
          <Home homePlanet={this.state.homePlanet} />
        </div>
      </div>
    )
  }
}

export default HomeContainer;
