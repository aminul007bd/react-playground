import React, { useState } from 'react'

function Accordion({ items }) {
	const [isSelected, setIsselected] = useState(null)
	const clickedTitled = (itemId) => {
		setIsselected(itemId)
	}

	const renderItems = items.map((accordion) => {
		const isActive = accordion.id === isSelected ? 'show' : 'hide'
		console.log(isSelected)
		return (
			<div className="card" key={accordion.id}>
				<div className="card-header" id="headingOne">
					<h5 className="mb-0">
						<button
							className="btn btn-link"
							data-toggle="collapse"
							data-target="#collapse"
							aria-expanded="true"
							aria-controls="collapseOne"
							onClick={() => clickedTitled(accordion.id)}
						>
							{accordion.title}
						</button>
					</h5>
				</div>

				<div
					id={'card_id' + accordion.id}
					className={'collapse ' + isActive}
					aria-labelledby="headingOne"
					data-parent="#accordion"
				>
					<div className="card-body">{accordion.description}</div>
				</div>
			</div>
		)
	})
	return <div id="accordion">{renderItems}</div>
}

export default Accordion
