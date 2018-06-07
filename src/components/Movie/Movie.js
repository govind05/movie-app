import React from 'react';
import { connect } from 'react-redux';
import {
	MdThumbDown,
	MdThumbUp
} from 'react-icons/lib/md';
import {
	addToWatched,
	onUserRating
} from '../../store/actions/watched';

import './Movie.css';

class Movie extends React.Component {
	render() {
		const watched = this.props.watched.filter(movie =>
			movie.title === this.props.title).length;

		const movie = this.props.watched.find(movie =>
			movie.title === this.props.title);

		const rating = !movie
			? null : !movie.rating
				? null
				: movie.rating === 'upvote'
					? 'upvote' : 'downvote';

		const movieInfo = this.props.title
			? (
				<div className='Movie'>
					<div>
						<div className='Image'>
							<img
								src={this.props.poster}
								alt={this.props.title}
								height='300px'
								width='200px'
								style={{ cursor: 'pointer' }}
								onClick={() => this.props.onAddToWatched(
									this.props.title, this.props.poster, this.props.releasedDate)}
							/>
							<p>Add to Watched</p>
						</div>
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
											<p style={{
												marginBottom: 5,
												fontWeight: 'bolder'
											}}>
												{rating.Value}
											</p>
											<p style={{
												margin: 0,
												fontSize: 14,
												color: '#666',
												fontWeight: 'bolder'
											}}>
												{rating.Source}
											</p>
										</div>
									)
								}
							</div>
							<div>
								<h3 style={{ marginBottom: 5 }}>Description</h3>
								<p style={{
									marginTop: 0,
									color: '#333'
								}}>
									{this.props.plot}
								</p>
							</div>
							{
								watched
									? (
										<div>
											<span>
												<MdThumbUp
													className='Thumb'
													style={{ cursor: 'pointer' }}
													color={rating === 'upvote' ? 'green' : 'grey'}
													size={30}
													onClick={() => this.props.onUserRating('upvote', this.props.title)}
												/>
											</span>
											<span>
												<MdThumbDown
													className='Thumb'
													style={{ cursor: 'pointer' }}
													color={rating === 'downvote' ? 'red' : 'grey'}
													size={30}
													onClick={() => this.props.onUserRating('downvote', this.props.title)}
												/>
											</span>
										</div>
									)
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
});

const mapDispatchToProps = dispatch => ({
	onAddToWatched: (title, poster, releasedDate) =>
		dispatch(addToWatched(title, poster, releasedDate)),
	onUserRating: (rating, title) =>
		dispatch(onUserRating(rating, title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
