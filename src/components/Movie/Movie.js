import React from 'react';
import { connect } from 'react-redux';
import { MdThumbDown, MdThumbUp } from 'react-icons/lib/md';
import { addToWatched } from '../../store/actions/watched';
import { onUserRating } from '../../store/actions/movie';

import './Movie.css';

class Movie extends React.Component {
	render() {
		const watched = this.props.watched.filter(movie =>
			movie.title === this.props.title).length;
		const movieInfo = this.props.title ? (
			<div className='Movie'>
				<div>
					<img
						src={this.props.poster} alt={this.props.title} height='300px'
						style={{ cursor: 'pointer' }}
						onClick={() => this.props.onAddToWatched(this.props.title, this.props.poster)} />
					<div>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<h1>{this.props.title}</h1>
							{watched
								? <div className='Watched'>Watched</div>
								: null}
						</div>
						<p className='Date'>{this.props.releasedDate}</p>
						<div className='Ratings'>
							{
								this.props.ratings.map(rating =>
									<div key={rating.Source}>
										<p style={{ marginBottom: 5, fontWeight: 'bolder' }}>
											{rating.Value}
										</p>
										<p style={{ margin: 0, fontSize: 14, color: '#666', fontWeight: 'bolder' }}>
											{rating.Source}
										</p>
									</div>
								)
							}
						</div>
						<div>
							<h3 style={{ marginBottom: 5 }}>Description</h3>
							<p style={{ marginTop: 0, color: '#333' }}>{this.props.plot}</p>
						</div>
						{watched
							? <div>
								<MdThumbUp style={{ cursor: 'pointer' }} color={this.props.rating === 'upvote' ? 'green' : 'grey'} size={30} onClick={() => this.props.onUserRating('upvote')} />
								<MdThumbDown style={{ cursor: 'pointer' }} color={this.props.rating === 'downvote' ? 'red' : 'grey'} size={30} onClick={() => this.props.onUserRating('downvote')} />
							</div>
							: null
						}
					</div>
				</div>
			</div>
		) : null;
		return movieInfo;
	}
}

const mapStateToProps = (state) => ({
	title: state.movie.title,
	poster: state.movie.poster,
	ratings: state.movie.ratings,
	releasedDate: state.movie.releasedDate,
	plot: state.movie.plot,
	watched: state.watched.movies,
	rating: state.movie.rating,
})

const mapDispatchToProps = dispatch => ({
	onAddToWatched: (title, poster) => dispatch(addToWatched(title, poster)),
	onUserRating: (rating) => dispatch(onUserRating(rating)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
