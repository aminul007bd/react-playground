import React from 'react'

const DEFAULT_PLACEHOLDER_IMAGE =
	'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'

const Movie = ({ movie }) => {
	const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster
	return (
		<div className="col-lg-3 col-md-4 col-sm-6 mb-3">
			<div className="text-center h-100 bg-light card">
				<img
					className="w-50 img-fluid mt-4 mx-auto"
					src={poster}
					alt={`The movie titled: ${movie.Title}`}
				/>
				<div className="card-body d-flex flex-column">
					<h5 className="card-title">{movie.Title}</h5>
					<p>({movie.Year})</p>
				</div>
			</div>
		</div>
	)
}
export default Movie
