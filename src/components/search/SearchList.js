import React, { useState, useEffect } from 'react'
import axios from 'axios'

function SearchList({ searchQuery }) {
	const baseUrl = 'https://en.wikipedia.org/w/api.php'
	const [results, setResults] = useState([])
	useEffect(() => {
		const searchWiki = async () => {
			const { data } = await axios.get(baseUrl, {
				params: {
					action: 'query',
					list: 'search',
					format: 'json',
					origin: '*',
					srsearch: searchQuery,
				},
			})

			setResults(data.query?.search)
		}
		searchWiki()
	}, [searchQuery])
	const searchResult = results?.map((result) => {
		return (
			<li
				key={result.pageid}
				className="list-group-item d-flex justify-content-between align-items-center"
			>
				<p>{result.title}</p>
				<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
				{/* <div className="image-parent">
					<img
						src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/don_quixote.jpg"
						className="img-fluid"
						alt={result.title}
					/>
				</div> */}
			</li>
		)
	})

	return (
		<div className="container mt-4">
			<div className="row">
				<div className="col-12 col-sm-12">
					<ul className="list-group">{searchResult}</ul>
				</div>
			</div>
		</div>
	)
}

export default SearchList
