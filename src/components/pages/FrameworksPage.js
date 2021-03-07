import React, { useState, useEffect } from 'react'
import items from './items'

export default function FrameworksPage() {
	const [data, setData] = useState([])
	const [searchValue, setSearchValue] = useState('')

	const searchItems = (value) => {
		setSearchValue(value)
	}
	useEffect(() => {
		const timerId = setTimeout(() => {
			const result = items.filter(
				(data) =>
					data.title.toLowerCase().includes(searchValue.toLowerCase()) ||
					data.description.toLowerCase().includes(searchValue.toLowerCase())
			)
			if (searchValue === null || searchValue === '') {
				setData(items)
			}
			setData(result)
		}, 1000)
		return () => {
			clearTimeout(timerId)
		}
	}, [data, searchValue])
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
			{data.length === 0 ? (
				<p className="not-found">No data found</p>
			) : (
				data.map((item, index) => (
					<div key={index} className="item-list-card">
						<span className="card-title"> {item.title} </span>
						<p> {item.description} </p>
					</div>
				))
			)}
		</>
	)
}
