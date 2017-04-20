import React, { Component } from 'react';
import {Link} from 'react-router';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      stardate: new Date(),
      planets: [
        {
          name: "Mercury",
          info: "Mercury's eccentric orbit takes the small planet as close as 47 million km (29 million miles) and as far as 70 million km (43 million miles) from the sun. If one could stand on the scorching surface of Mercury when it is at its closest point to the sun, the sun would appear more than three times as large as it does when viewed from Earth.",
          image: "mercury.gif"
        },
        {
          name: "Venus",
          info: "Venus is the second planet from the sun and our closest planetary neighbor. Similar in structure and size to Earth, Venus spins slowly in the opposite direction most planets do. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains. Venus is named for the ancient Roman goddess of love and beauty, the counterpart to the Greek goddess Aphrodite.",
          image: "venus.jpg"
        },
        {
          name: "Earth",
          info: "Earth is the third planet from the sun and the fifth largest in the solar system. Just slightly larger than nearby Venus, Earth is the biggest of the terrestrial planets. Our home planet is the only planet in our solar system known to harbor living things. The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is an English/German word, which simply means the ground.",
          image: "earth.jpg"
        },
        {
          name: "Mars",
          info: "Mars is a cold desert world. It is half the diameter of Earth and has the same amount of dry land. Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons and weather, but its atmosphere is too thin for liquid water to exist for long on the surface. There are signs of ancient floods on Mars, but evidence for water now exists mainly in icy soil and thin clouds.",
          image: "mars.jpg"
        },
        {
          name: "Jupiter",
          info: "Jupiter is the fifth planet from our sun and the largest planet in the solar system. Jupiter's stripes and swirls are cold, windy clouds of ammonia and water. The atmosphere is mostly hydrogen and helium, and its iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years. Jupiter is surrounded by more than 50 moons (with more a dozen more awaiting confirmation). Scientists are most interested in the Galilean satellites — the four largest moons discovered by Galileo Galilei in 1610: Europa, Callisto, Ganymede and Io. Jupiter also has three rings, but they are very hard to see and not nearly as intricate as Saturn's. Jupiter is named for the king of ancient Roman gods.",
          image: "jupiter.png"
        },
        {
          name: "Saturn",
          info: "The second largest planet in our solar system, adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings -- made of chunks of ice and rock -- but none are as spectacular or as complicated as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball of mostly hydrogen and helium. Surrounding by 53 confirmed and nine provisional moons, Saturn is home to some of the most fascinating landscapes in our solar system. From the jets of Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries. The farthest planet from Earth observable by the unaided human eye, Saturn has been known since ancient times and is named for the Roman god of agriculture and wealth. The Greek equivalent was Cronos, the father of Zeus/Jupiter.",
          image: "saturn.jpg"
        },
        {
          name: "Uranus",
          info: "The seventh planet from the sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the sun like a rolling ball.  The first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode. William Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead the planet was named for Uranus, the Greek god of the sky, as suggested by Johann Bode.",
          image: "uranus.jpeg"
        },
        {
          name: "Neptune",
          info: "Dark, cold and whipped by supersonic winds, Neptune is the last of the hydrogen and helium gas giants in our solar system. More than 30 times as far from the sun as Earth, the planet takes almost 165 Earth years to orbit our sun. In 2011 Neptune completed its first orbit since its discovery in 1846. We see Neptune as Columbus saw America from the coast of Spain.",
          image: "neptune.jpg"
        },
        {
          name: "Pluto",
          info: "Discovered in 1930, Pluto was long considered our solar system's ninth planet. But after the discovery of similar intriguing worlds deeper in the distant Kuiper Belt, icy Pluto was reclassified as a dwarf planet. Findings by NASA's New Horizons in 2015 revealed for the first time how that Pluto is a complex and mysterious world. Information about Pluto and its largest moon, Charon, provide insight into the collision believed to have formed the dwarf planet and moons we see today.",
          image: "pluto.jpg"
        }
      ]
    }
  }

  render() {
    return (
      <div className="container">
        <ul className='nav nav-tabs'>
          <li role='presentation'>
            <Link to='/'>Home</Link>
          </li>
          <li role='presentation'>
            <Link to='/solarsystem'>The Solar System</Link>
          </li>
        </ul>
        {React.cloneElement(this.props.children, {stardate: this.state.stardate, planets: this.state.planets})}
      </div>
    );
  }
}

export default App;
