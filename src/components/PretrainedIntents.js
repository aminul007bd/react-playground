import React from 'react'
import AiData from '../data/intents.json'

function PretrainedIntents() {
	const intentsData = AiData.map((intents) => {
		return (
			<div className="card mt-2" key={intents.id}>
				<div className="card-body">
					<h5 className="card-title">{intents.name}</h5>
					<p className="card-text">{intents.trainingData.expressionCount}</p>
					{intents.trainingData.expressions.map((expression) => (
						<p className="card-text" key={expression.id}>
							{expression.text}
						</p>
					))}
					<p className="card-text">{intents.description}</p>
					<p className="card-text">{intents.reply.text}</p>
				</div>
			</div>
		)
	})
	return intentsData
}

export default PretrainedIntents
