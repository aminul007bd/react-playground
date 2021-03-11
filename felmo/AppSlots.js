import React from 'react'

export default function AppSlots({ slots }) {
	const postApiUrl = 'https://api-staging.felmo.de/coding-challenge'

	const selectTimeSlot = (IsoTime) => {
		fetch(postApiUrl, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'http://localhost:3000'
			},
			body: JSON.stringify({
				time: IsoTime
			})
		})
			.then((response) => response.json())
			.then((data) => {
				if (data === 'success') {
					console.log(data)
				}
			})
		console.log(IsoTime)
	}
	const emptySlots = slots?.map((slot, index) => {
		return (
			<button
				key={index}
				style={{ margin: '5px' }}
				className="btn btn-outline-success"
				onClick={() => selectTimeSlot(slot.ISO_time)}
			>
				{slot.time}
			</button>
		)
	})
	return (
		<>
			<div className="mr-1">{emptySlots}</div>
		</>
	)
}
