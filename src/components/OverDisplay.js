import React, { Component } from 'react';

class OverDisplay extends Component {

    render() {
        //console.log(this.props.currentoverstatus);
        const { CurrentRuns, RunsOnLastBall, CurrentBall } = this.props.currentoverstatus; 
        return (
            <div style={ styleOverDisplay }>
                <ul style={{ listStyle: 'none'}}>
                    <h3>Current Runs : {CurrentRuns}</h3>
                    <h3>Runs on last Ball : {RunsOnLastBall}</h3>
                    <h3>Current Ball : {CurrentBall} </h3>     
                </ul>       
            </div>
        )
    }
}

// styling for the Over Display
const styleOverDisplay = {
    display: 'flex',
    flexDirection: 'row',
    background: '#e6f2ff',
    padding: '4px',
    marginBottom: '9px'
}

export default OverDisplay;
