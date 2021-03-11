import React, { useState } from 'react'
import appData from '../data/intents.json'
import { Link } from 'react-router-dom'

function PretrainedIntents() {
	const [isActive, setIsActive] = useState(false)
	const [selectedIds, setSelectedIds] = useState([])
	console.log('selected ids: ', selectedIds)
	const topRow = () => {
		return (
			<div className="row">
				<div className="col-xs-6">
					<h3>{`Total selected: ${selectedIds.length}`}</h3>
				</div>
				<div className="col-xs-6">
					<button className="btn btn-outline-secondary">Select All</button>
				</div>
			</div>
		)
	}
	const intentsData = appData.map((intents) => {
		const onToggle = (id) => {
			if (selectedIds.includes(id)) {
				const removedId = selectedIds.filter((item) => item !== id)
				setSelectedIds(removedId)
			} else {
				setSelectedIds([...selectedIds, id])
			}
		}
		const isRowSelected = selectedIds.includes(intents.id) ? 'active' : ''
		return (
			<div className="list-group mb-1" key={intents.id}>
				<Link
					className={`list-group-item list-group-item-action ${isRowSelected}`}
					to="#"
					onClick={() => onToggle(intents.id)}
				>
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">{intents.name}</h5>
						<small>{intents.trainingData.expressionCount}</small>
					</div>
					{intents.trainingData.expressions.map((expression) => (
						<span key={expression.id} className="badge badge-secondary badge-pill mr-1">
							{expression.text}
						</span>
					))}

					<p className="mb-0">{intents.description}</p>
					<small>{intents.reply.text}</small>
				</Link>
			</div>
		)
	})
	return (
		<>
			{topRow}
			{intentsData}
		</>
	)
}

export default PretrainedIntents
