import React, { Component } from 'react';

import DrumCards from '../DrumCards';

export const styles = {
  header: {
    color: '#2C3646',
    width: '100%',
    textAlign: 'center',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function playDrums(event) {
  //TODO: Fix issue with returned promise remaining pending, so audio doesn't play
  const playPromise = Promise.resolve(document.querySelector(`audio[data-key="${event.keyCode}"]`).play());
  
  playPromise.then(function() {
    debugger
    console.log('playing');
  })
  .catch(error => {
    debugger
    console.log(error);
  });

  // audio.currentTime = 0;
  // audio.play(); 
  // console.log(audio); 
};

class DrumKit extends Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    playDrums(event);
  }

  render(){
    return(
      <div style={styles.root}>
        <header style={styles.header}>
          <h1>DrumKit</h1>
        </header>

        <DrumCards />
      </div>
    )
  }
}

export default DrumKit;