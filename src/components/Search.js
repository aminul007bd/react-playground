import React, { useState } from "react"

const Search = (props) => {
	const [searchValue, setSearchValue] = useState("")

	const handleSearchInputChanges = (e) => {
		setSearchValue(e.target.value)
	}
	const resetInputField = () => {
		setSearchValue("")
	}
	const callSearchFunction = (e) => {
		e.preventDefault()
		props.search(searchValue)
		resetInputField()
	}
	return (
		<div className="jumbotron border bg-light mt-4 text-center">
			<div className="container">
				<h1 className="h3 mb-3">Search for Movies</h1>
				<form id="searchForm">
					<div className="input-group">
						<input
							type="text"
							className="form-control form-control-lg"
							value={searchValue}
							onChange={handleSearchInputChanges}
							name="searchText"
							placeholder="Search Movies"
						/>
						<div className="input-group-append">
							<button
								type="submit"
								className="btn btn-primary btn-lg"
								onClick={callSearchFunction}
								value="SEARCH"
							>
								search
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
export default Search
