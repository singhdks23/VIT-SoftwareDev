import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShotSelection extends Component {
    state = {
        // Possible Shot Selection
        possibleshots: ''
    }

    // live updation state --- possibleshots 
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    // handling the submission of shot
    onSubmit = (e) => {
        e.preventDefault();
        this.props.applyShots(this.state.possibleshots);
        this.setState({ possibleshots: '' });
    }
    

    render() {
        return (
            <form onSubmit={this.onSubmit} style = {{display: 'flex'}}>
                <input 
                    type="text" 
                    name="possibleshots" 
                    placeholder="shot name...." 
                    style={{flex: '10', padding: '5px' }}
                    value={this.state.possibleshots}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn" 
                    style={{flex: '1'}} 
                />
            </form>
        )
    }
}

// prop types
ShotSelection.propTypes = {
    applyShots: PropTypes.func.isRequired
}


export default ShotSelection;
