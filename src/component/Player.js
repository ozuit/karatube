import React from 'react';
import YouTube from 'react-youtube';

export default class Player extends React.Component {
  render() {
    const opts = {
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return <YouTube id="youtube-frame" videoId={this.props.youtube_id} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}