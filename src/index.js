import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
// import VideoListItem from './components/video_list_item';
const API_KEY = "AIzaSyBtPn-benyFiWWsRkpGT7P4Qd4ztpF-Pd8";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos)  =>{
     this.setState({ videos });
    });

  }

  render() {
    return (
      <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
      </div>
    );

  }
}

ReactDOM.render(<App />, document.querySelector('.container'));



