import React from 'react';
import Player from './component/Player';
import Video from './component/Video';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search_str: '',
            videos: [],
        }
    }

    handleSearch = (e) => {
        this.setState({
            search_str: e.target.value
        })
    }

    handleSubmit = (e) => {
        if (e.key === 'Enter') {
            gapi.client.youtube.search.list({
                part: "snippet",
                type: "video",
                q: `karaoke ${this.state.search_str}`,
                maxResults: 3,
            }).execute((response) => {
                var results = response.result;
                this.setState({
                    videos: results.items,
                })
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="current-video">
                    <Player youtube_id={this.props.current_video} />
                </div>
                <div className="search-container">
                    <input className="form-control search-input" type="text" value={this.state.search_str} onChange={this.handleSearch} onKeyPress={this.handleSubmit} placeholder="Nhập tên bài hát và nhấn enter..." />
                    {
                        this.state.videos.map((video, index) => (
                            <Video key={index}
                                title={video.snippet.title}
                                id={video.id.videoId}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        current_video: state.video
    }
}

export default connect(mapStateToProps, null)(App)