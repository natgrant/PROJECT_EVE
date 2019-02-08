import React, { Component } from "react";

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: true
    };
    this.url = "http://streaming.tdiradio.com:8000/house.mp3";
    this.audio = new Audio(this.url);
  }

  play = () => {
    this.setState({ play: true });
    this.audio.play();
  };

  render() {
    return (
      <div>
        <button className="music-button" onClick={this.play} />
      </div>
    );
  }
}

export default Music;
