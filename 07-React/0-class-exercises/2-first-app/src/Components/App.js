import React from 'react';
import './App.css';
import { getVideosById, getPopularList, getNowPlayingList, getTopRatedList, getComingSoonList, getTVShowList, getSearchList} from './tmdbRequests';
import Navbar from "./components/Navbar/Navbar"
import MovieCategory from './components/MovieCategory/MovieCategory'
import SearchBar from './components/SearchBar/SearchBar'
import MovieCard from './components/MovieCard/MovieCard'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      linkTitle: "",
      linkSelected: [],
      popularList: [],
      nowPlayingList: [],
      topRatedList: [],
      comingSoonList: [],
      tvShowList: [],
      videoList: [],
      inputValue: '',
      searchList: [],
    }
  }
   
  updateSearch = (text) => {
    this.setState({ inputValue: text })
    getSearchList(text)
    .then(res => {
      this.setState({ searchList: res.results || [] })
    })
  }

  componentDidMount(){
    getPopularList()
      .then(res => {
        this.setState({ popularList: res.results })
      })
      getNowPlayingList()
      .then(res => {
        this.setState({ nowPlayingList: res.results })
      })
      getTopRatedList()
      .then(res => {
        this.setState({ topRatedList: res.results })
      })
      getComingSoonList()
      .then(res => {
        this.setState({ comingSoonList: res.results })
      })
      getTVShowList()
      .then(res => {
        this.setState({ tvShowList: res.results })
      })
  }

  checkForSelectedLink(){
    return (
        {
          return this.state.searchList.length>0?<MovieCategory title={this.state.linkTitle} movies={this.state.linkSelected} />
              :
      <React.Fragment>
      {this.state.searchList.length>0 && <MovieCategory title="Search Results" movies={this.state.searchList} />}
            <MovieCategory title="Trending" movies={this.state.popularList} />
            <MovieCategory title="Now Playing" movies={this.state.nowPlayingList} />
            <MovieCategory title="Top Rated" movies={this.state.topRatedList} />
            <MovieCategory title="Coming Soon" movies={this.state.comingSoonList} />
            <MovieCategory title="TV Shows" movies={this.state.tvShowList} />
            </React.Fragment>
          }

    )
  }
  

  render(){
    return (
        <div className="app-container">
          {/* <header>GetFlix</header> */}
          <main>
            <Navbar />
            <SearchBar keyword={this.state.inputValue} setKeyword={this.updateSearch} />
           
          </main>
          <footer>
            Netflix Replica By Jessica
          </footer>
        </div>
      );
    }
}

export default App;
