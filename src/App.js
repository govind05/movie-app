import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { MdSubdirectoryArrowRight as Arrow } from 'react-icons/lib/md';

import SearchBar from './components/searchBar/searchBar';
import Movie from './components/Movie/Movie';
import Watched from './components/Watched/Watched';
import './App.css';
import { showMovie } from './store/actions/movie';

class App extends Component {
  state = {
    movieName: '',
    notFound: false,
    fetching: false,
    removeSearchMsg: false,
  };

  //Handling api request when user submits the movie name
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      fetching: true,
      removeSearchMsg: true,
    });
    axios
      .get(`http://www.omdbapi.com/?t=${this.state.movieName}&apikey=aabca0d`)
      .then(res => {
        if (res.data.Response === 'False') {
          this.setState({
            notFound: true,
          });
        } else {
          this.setState({
            notFound: false,
          });
          this.props.showMovie(res.data);
        }
        this.setState({
          fetching: false,
        });
      });
  };

  onChange = e => {
    this.setState({
      movieName: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        {/* 
        **************************
          searchbar

          movie name
          movie poster 
          movie description

          watched
          list of watched movies.
       */}
        <div className="SearchBar">
          <p>Movies</p>
          <SearchBar onChange={this.onChange} onSubmit={this.onSubmit} />
        </div>
        {!this.state.removeSearchMsg ? (
          <div className="search-msg">
            <div>
              Search for movies here
              <div className="arrow">
                <Arrow />
              </div>
            </div>
          </div>
        ) : null}
        {this.state.fetching ? (
          <p>Loading...</p>
        ) : this.state.notFound ? (
          <h1>Movie Not Found....</h1>
        ) : (
          <Movie />
        )}
        {this.state.movieName ? <hr /> : null}
        <Watched />
      </div>
    );
  }
}

const mapDispatchToProp = dispatch => ({
  showMovie: data => dispatch(showMovie(data)),
});

export default connect(
  null,
  mapDispatchToProp
)(App);
