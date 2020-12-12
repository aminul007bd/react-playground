import React, { useState, useEffect } from 'react'
import axios from 'axios'

function SearchList({ searchQuery }) {
	const baseUrl = 'https://en.wikipedia.org/w/api.php'
	const [data, setData] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(baseUrl, {
				params: {
					action: 'query',
					list: 'search',
					format: 'json',
					origin: '*',
					srsearch: searchQuery,
				},
			})

			setData(result.data.query?.search)
		}
		fetchData()
	}, [searchQuery])
	console.log(data)
	const searchResult = data.map((result) => {
		return <li key={result.pageid}>{result.title}</li>
	})

	return <ul>{searchResult}</ul>
}

export default SearchList
