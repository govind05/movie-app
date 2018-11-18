import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { MdThumbDown, MdThumbUp } from 'react-icons/lib/md';

import { removeFromWatched } from '../../store/actions/watched';
import './Watched.css';

export function Watched(props) {
  return (
    <div className="Watched">
      {/* Checking if there is any watched movie to render watched section. */}
      {props.watchedMovies.length ? (
        <div>
          <h1>Watched</h1>
          <div className="List">
            {/* Mapping all the watched movies to jsx */}
            {props.watchedMovies.map(movie => (
              <div
                onClick={() => props.onRemoveFromWatched(movie.title)}
                key={movie.title}
                className="Item"
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  height="240px"
                  width="180px"
                />
                <p>
                  {movie.title}
                  <span>{movie.releasedDate}</span>
                </p>
                {/* To show the movie rating if any rating exist. */}
                {!movie.rating ? null : (
                  <div>
                    {movie.rating === 'upvote' ? (
                      <MdThumbUp color="green" size={40} />
                    ) : (
                      <MdThumbDown color="red" size={40} />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

const mapStateToProps = state => ({
  watchedMovies: state.watched.movies,
});

const mapDispatchToProps = dispatch => ({
  onRemoveFromWatched: title => dispatch(removeFromWatched(title)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Watched);
