import React, { useEffect, useState } from 'react'

function MapFilter() {
	const [users, setUsers] = useState([])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((json) => setUsers(json))
	}, [])
	return (
		<>
			<h1>Users</h1>
			<div className="card" style={{ width: '18rem' }}>
				{users.map((user) => (
					<div className="card-body">
						<p>{user.name}</p>
						<p>{user.userName}</p>
						<p>{user.email}</p>
					</div>
				))}
			</div>
		</>
	)
}

export default MapFilter
