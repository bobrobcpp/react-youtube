import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
// import VideoListItem from './components/video_list_item';
const API_KEY = "AIzaSyBtPn-benyFiWWsRkpGT7P4Qd4ztpF-Pd8";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
       };
       this.videoSearch('skateboarding');
  }


videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, (videos)  =>{
     this.setState({
      videos: videos,
      selectedVideo: videos[0]
       });
    });

}

  render() {
    const videoSearch =_.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
      onVideoSelect={selectedVideo => this.setState({selectedVideo})}
      videos={this.state.videos} />
      </div>
    );

  }
}

ReactDOM.render(<App />, document.querySelector('.container'));



