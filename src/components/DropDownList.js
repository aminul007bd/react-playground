import React from 'react'

const firstArr = [
	{
		id: '1',
		winner: 'Captain America'
	},
	{
		id: '4',
		winner: 'Aquaman'
	},
	{
		id: '2',
		winner: 'Captain America'
	},
	{
		id: '3',
		winner: 'Aquaman'
	}
]

const secondArr = [
	{
		id: '1',
		winner: 'Wonder women'
	},
	{
		id: '2',
		winner: 'Param', //why not
		strenths: ['fly', 'fight', 'speed']
	}
]

const mergedArray = [...secondArr, ...firstArr]

let set = new Set()
let unionArray = mergedArray.filter((item) => {
	if (!set.has(item.id)) {
		set.add(item.id)
		return true
	}
	return false
}, set)

const DropDownList = ({ optionList }) => {
	const options = optionList?.map((options, index) => {
		return (
			<option key={index} value={options.value}>
				{options.label}
			</option>
		)
	})
	return <select className="custom-select">{options}</select>
}

export default DropDownList
