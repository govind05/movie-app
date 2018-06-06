import React, { Component } from 'react'
import { connect } from 'react-redux';
import { MdThumbDown, MdThumbUp } from 'react-icons/lib/md';

import { removeFromWatched } from '../../store/actions/watched';
import './Watched.css';

export class Watched extends Component {
  render() {
    return (
      <div className='Watched'>
        {this.props.watchedMovies.length ?
          (<div >
            <h1>Watched</h1>
            <div className='List'>
              {this.props.watchedMovies.map(movie => (
                <div key={movie.title} className='Item'>
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    height='240px'
                    width='180px'
                    onClick={() => this.props.onRemoveFromWatched(movie.title)} />
                  <p>{movie.title}</p>
                  <div>{
                    !this.props.rated ? null :
                      this.props.rated === 'upvote' ?
                        <MdThumbUp color='green' size={30} /> :
                        <MdThumbDown color='red' size={30} />
                  }
                  </div>
                </div>
              ))}
            </div>
          </div>) : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  watchedMovies: state.watched.movies,
  rated: state.movie.rating
});

const mapDispatchToProps = dispatch => ({
  onRemoveFromWatched: (title) => dispatch(removeFromWatched(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(Watched);
