import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// import VideoListItem from './components/video_list_item';
const API_KEY = "AIzaSyBtPn-benyFiWWsRkpGT7P4Qd4ztpF-Pd8";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
       };

    YTSearch({key: API_KEY, term: 'offshore survey'}, (videos)  =>{
     this.setState({
      videos: videos,
      selectedVideo: videos[0]
       });
    });

  }

  render() {
    return (
      <div>
      <SearchBar />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
      onVideoSelect={selectedVideo => this.setState({selectedVideo})}
      videos={this.state.videos} />
      </div>
    );

  }
}

ReactDOM.render(<App />, document.querySelector('.container'));



