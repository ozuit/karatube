import React from 'react';
import Player from './component/Player';
import Video from './component/Video';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search_str: '',
            youtube_id: 'jQMW_BVmkyc',
            videos: [],
        }
    }

    componentDidMount = () => {
        gapi.client.setApiKey("AIzaSyCfIhzZlUk8w44nlAS-oollzL3OVZXzwqE");
        gapi.client.load("youtube", "v3", function() {
            // yt api is ready
        });
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
                console.log(results.items)
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
                    <Player youtube_id={this.state.youtube_id} />
                </div>
                <div className="search-container">
                    <input className="form-control search-input" type="text" value={this.state.search_str} onChange={this.handleSearch} onKeyPress={this.handleSubmit} placeholder="Nhập tên bài hát và nhấn enter..." />
                    {
                        this.state.videos.map((video, index) => (
                            <Video key={index}
                                handleClick={() => this.setState({ youtube_id: video.id.videoId })}
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
