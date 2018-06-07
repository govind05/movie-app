import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import SearchBar from './components/searchBar/searchBar';
import Movie from './components/Movie/Movie';
import Watched from './components/Watched/Watched';
import './App.css';
import { showMovie } from './store/actions/movie';

class App extends Component {
  state = {
    movieName: '',
    notFound: false
  }

  onSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://www.omdbapi.com/?t=${this.state.movieName}&apikey=aabca0d`)
      .then(res => {
        if (res.data.Response === 'False') {
          this.setState({
            notFound: true
          });
        } else {
          this.setState({
            notFound: false
          });
          this.props.showMovie(res.data);
        }
      });
  }

  onChange = (e) => {
    this.setState({
      movieName: e.target.value
    })
  }

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
          <SearchBar
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
        </div>
        {this.state.notFound ? <h1>Movie Not Found....</h1> :
          <Movie />}
        {this.state.movieName ? <hr /> : null}
        <Watched />
      </div>
    );
  }
}

const mapDispatchToProp = dispatch => ({
  showMovie: (data) => dispatch(showMovie(data))
})

export default connect(null, mapDispatchToProp)(App);
