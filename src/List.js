import React from 'react'
import { useGlobalContext } from './context'
import crossIcon from './assets/images/icon-cross.svg'

function List() {
	const { todoList, removeSingleTodo } = useGlobalContext()
	return todoList.map((todo) => {
		const { id, itemName } = todo
		return (
			<div className='todo-item' key={id}>
				<button className='disk-btn'></button>
				<p>{itemName}</p>
				<button className='btn' onClick={() => removeSingleTodo(id)}>
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
