import React from 'react';

export default class Video extends React.Component {
  render() {
    return (
      <div className="video-item" onClick={this.props.handleClick}>
        <h4>{this.props.title}</h4>
        <img width="200"  src={`https://img.youtube.com/vi/${this.props.id}/maxresdefault.jpg`} />
      </div>
    )
  }
}