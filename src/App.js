import React, { Component } from 'react';
import OverDisplay from './components/OverDisplay';
import ShotSelection from './components/ShotSelection';

import './App.css';

class App extends Component {
  state = {
  
    // Shots Selection Chart
    shots: {
      Defend: 0,
      Run: 1,
      RunFast: 2,
      CoverDrive: 2,
      OnDrive: 2,
      StraightDrive: 2,
      SquareCut: 4,
      Pull: 4,
      Hook: 6,
      Helicopter: 6
    },

    // To Display the Scores
    currentoverstatus: {
      CurrentRuns: 0,
      RunsOnLastBall: 0,
      CurrentBall: 0,
    }
    
    
  }

  // matching the shot selection 
  applyShots = (possibleshots) => {
        // console.log(possibleshots);
        
  } 

  render() {
    return (
      <div className="App">
        <h1>Welcome to Hitwicket Mania</h1>
        <OverDisplay currentoverstatus={this.state.currentoverstatus} /> 
        <ShotSelection applyShots={this.applyShots} />     
      </div>
    )
  }
};

export default App;
      