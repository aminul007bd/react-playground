import React from 'react'

const streamList = [
	{
		title: 'Gamming',
		description: 'This is top 10 games in 2020'
	},
	{
		title: 'App Development',
		description: 'React Hooks React query'
	},
	{
		title: 'TV Show',
		description: 'Stranger things Dark'
	},
	{
		title: 'Funny Show',
		description: 'Jim carry Mr Bin'
	}
]

function AppStreamList() {
	const streamRow = streamList.map((streams, index) => {
		return (
			<div className="card mt-2" key={index}>
				<div className="card-body">
					<h5 className="card-title">{streams.title}</h5>
					<p className="card-text">{streams.description}</p>
				</div>
			</div>
		)
	})
	return streamRow
}

export default AppStreamList
