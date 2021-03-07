import React, { useState, useEffect } from 'react'
import items from './items'

export default function FrameworksPage() {
	const [data, setData] = useState(items)
	const [searchValue, setSearchValue] = useState('')

	const searchItems = (value) => {
		console.log(value)
		setSearchValue(value)
	}
	useEffect(() => {
		const result = data.filter(
			(data) =>
				data.title.toLowerCase().includes(searchValue.toLowerCase()) ||
				data.description.toLowerCase().includes(searchValue.toLowerCase())
		)
		setData(result)
	}, [searchValue])
	return (
		<>
			<div>
				<input
					type="search"
					placeholder="Search"
					aria-label="Search"
					value={searchValue}
					onChange={(e) => searchItems(e.target.value)}
				/>
			</div>
			{data.map((item, index) => (
				<div key={index} className="item-list-card">
					<span className="card-title"> {item.title} </span>
					<p> {item.description} </p>
				</div>
			))}
		</>
	)
}
