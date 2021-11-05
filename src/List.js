import React from 'react'
import crossIcon from './assets/images/icon-cross.svg'

function List({ list, removeItem }) {
	return list.map((item) => {
		const { id, itemName } = item
		return (
			<div className='todo-item' key={id}>
				<button className='disk-btn'></button>
				<p>{itemName}</p>
				<button className='btn' onClick={() => removeItem(id)}>
					<img
						className='cross-icon'
						src={crossIcon}
						alt='cross-icon'
					/>
				</button>
			</div>
		)
	})
}

export default List
