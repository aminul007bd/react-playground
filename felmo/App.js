import React, { useState } from 'react'
import './App.css'
import AppSlots from './components/AppSlots'

function App() {
	const apiUrl = 'https://api-staging.felmo.de/v1/scheduling/availabilities?zip='

	const [zipCode, setzipCode] = useState('')
	const [vetTimeSlots, setVetTimeSlots] = useState([])

	const getZepcodeValue = (zipCodeValue) => {
		setzipCode(zipCodeValue)
	}

	const getAvailableVetTimes = () => {
		fetch(apiUrl + zipCode, {
			method: 'GET',
			dataType: 'JSON',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			}
		})
			.then((res) => res.json())
			.then(
				(result) => {
					setVetTimeSlots(result)
					console.log('get back the result from api', result)
				},
				(error) => {
					console.log(error)
				}
			)
	}

	console.log(vetTimeSlots)
	return (
		<div className="container">
			<div className="row col-xs-12">
				<input
					type="text"
					className="form-control mb-2"
					value={zipCode}
					onChange={(e) => getZepcodeValue(e.target.value)}
				/>
				<button type="button" className="btn btn-primary" onClick={getAvailableVetTimes}>
					Book a vet
				</button>
			</div>
			<div className="row">
				<div className="col-xs-12 mt-4">
					{vetTimeSlots.items?.map((item, index) => (
						<div className="accordion mb-2" key={index} id="accordionExample">
							<div className="card">
								<div className="card-header" id="headingOne">
									<h2 className="mb-0">
										<button
											className="btn btn-link btn-block text-left"
											style={{ textDecoration: 'none' }}
											type="button"
											data-toggle="collapse"
											data-target={`#${index}`}
											aria-expanded="true"
											aria-controls={`#${index}`}
										>
											<span style={{ paddingRight: '15px' }}>{item.date_format}</span>
											<span style={{ paddingRight: '15px' }}>{item.weekday}</span>
											<span style={{ paddingRight: '15px' }} className="text-right">
												Empty Slots: {item.slots.length}
											</span>
										</button>
									</h2>
								</div>
								<div
									id={`#${index}`}
									className="collapse show"
									aria-labelledby="headingOne"
									data-parent="#accordionExample"
								>
									<div className="card-body">
										<AppSlots slots={item.slots} />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default App
