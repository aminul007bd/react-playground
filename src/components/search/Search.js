import React, { useState } from 'react'

const SearchBar = ({ searchText }) => {
	const [searchTerm, setSearchTerm] = useState('')
	// console.log(searchTerm)
	searchText(searchTerm)
	return (
		<div>
			<input
				className="form-control mr-sm-2"
				type="search"
				placeholder="Search"
				aria-label="Search"
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</div>
	)
}

export default SearchBar
