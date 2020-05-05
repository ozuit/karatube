import React from 'react';
import { changeVideo } from '../actions/video';
import { connect } from 'react-redux';

class Video extends React.Component {
  render() {
    return (
      <div className="video-item" onClick={() => this.props.changeVideo(this.props.id)}>
        <h4>{this.props.title}</h4>
        <img width="200"  src={`https://img.youtube.com/vi/${this.props.id}/maxresdefault.jpg`} />
      </div>
    )
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
      changeVideo: (video_id) => dispatch(changeVideo(video_id))
  }
}

export default connect(null, mapDispatchToProps)(Video)