import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    name: '',
    Kick: '',
    Snare: '',
    Block: '',
    'Tom-Tom': '',
    Rim: '',
    'Hi-Hat': '',
    Cowbell: '',
    Synth: '',
    Conga: ''
  }
  this.displayPad = this.displayPad.bind(this);
  this.playAudio = this.playAudio.bind(this);
  this.handleKeyPress = this.handleKeyPress.bind(this);
  this.handleClick = this.handleClick.bind(this);
}

displayPad(pad) {
  this.setState({
    name: '' + pad
  })
}
playAudio(sample) {
  const AUDIO = document.getElementById(sample);
  AUDIO.currentTime = 0;
  AUDIO.play();
}
handleKeyPress(e) {
  if (/^[qweasdzxcQWEASDZXC](?!.)/.test(e.key)) {
document.getElementById(e.key.toUpperCase()).parentNode.click();
}
}
componentDidMount() {
window.addEventListener('keydown', this.handleKeyPress);
}
handleClick(e) {
  const HOLD = e.target.id;
  this.setState({
    [HOLD]: 'on'
  });
 const TIMER = () => {
    this.setState({
      [HOLD]: ''
    })
  }
  const DELAY = setTimeout(TIMER, 150);
  this.displayPad(e.target.id);
  this.playAudio(document.getElementById(e.target.id).children[0].id)
}

  render() {
    return (
    <div id='drum-machine'>
      <div id='display' className='row justify-content-center align-items-center'>
        {this.state.name}
      </div>
      <div className='row pt-4 justify-content-between'>
      <button className={`col-3 pt-3 pb-3 btn drum-pad ${this.state.Kick}`} id='Kick' onClick={this.handleClick}>
        Q
        <audio src='http://freesound.org/data/previews/171/171104_2394245-lq.mp3' className='clip' id='Q' />
      </button>
      <button className={`col-3 btn drum-pad ${this.state.Snare}`} id='Snare' onClick={this.handleClick}>
        W
        <audio src='http://freesound.org/data/previews/3/3146_6661-lq.mp3' className='clip' id='W' />
      </button>
      <button className={`col-3 btn drum-pad ${this.state.Block}`} id='Block' onClick={this.handleClick}>
        E
        <audio src='http://freesound.org/data/previews/53/53403_400592-lq.mp3' className='clip' id='E' />
      </button>
    </div>
    <div className='row pt-4 justify-content-between'>
      <button className={`col-3 pt-3 pb-3 btn drum-pad ${this.state['Tom-Tom']}`} id='Tom-Tom' onClick={this.handleClick}>
        A
        <audio src='http://freesound.org/data/previews/46/46554_394391-lq.mp3' className='clip' id='A' />
      </button>
      <button className={`col-3 btn drum-pad ${this.state.Rim}`} id='Rim' onClick={this.handleClick}>
        S
        <audio src='http://freesound.org/data/previews/13/13252_36719-lq.mp3' className='clip' id='S' />
      </button>
      <button className={`col-3 btn drum-pad ${this.state['Hi-Hat']}`} id='Hi-Hat' onClick={this.handleClick}>
        D
        <audio src='http://freesound.org/data/previews/45/45664_394391-lq.mp3' className='clip' id='D' />
      </button>
    </div>
    <div className='row pt-4 justify-content-between'>
      <button className={`col-3 pt-3 pb-3 btn drum-pad ${this.state.Cowbell}`} id='Cowbell' onClick={this.handleClick}>
        Z
        <audio src='http://freesound.org/data/previews/9/9780_23262-lq.mp3' className='clip' id='Z' />
      </button>
      <button className={`col-3 btn drum-pad ${this.state.Synth}`} id='Synth' onClick={this.handleClick}>
        X
        <audio src='http://freesound.org/data/previews/382/382967_6244580-lq.mp3' className='clip' id='X' />
      </button>
      <button className={`col-3 btn drum-pad ${this.state.Conga}`} id='Conga' onClick={this.handleClick}>
        C
        <audio src='http://freesound.org/data/previews/22/22766_132693-lq.mp3' className='clip' id='C' />
      </button>
    </div>
    </div>
  )
  }
}

export default App;
