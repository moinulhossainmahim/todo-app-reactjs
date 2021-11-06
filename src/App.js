import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './context'
import bgLight from './assets/images/bg-desktop-light.jpg'
import bgDark from './assets/images/bg-desktop-dark.jpg'
import moonIcon from './assets/images/icon-moon.svg'
import sunIcon from './assets/images/icon-sun.svg'
import List from './List.js'

function App() {
	const {
		todoList,
		theme,
		handleTheme,
		todoName,
		setTodoName,
		handleSubmit,
	} = useGlobalContext()

	return (
		<main className='todo-main'>
			<div className='todo-top-portion'>
				<img
					src={theme === 'light-theme' ? bgLight : bgDark}
					alt='light-bg'
					className='todo-top-image'
				/>
				<div className='todo-header'>
					<div className='todo-header-top'>
						<h2 className='todo-text'>Todo</h2>
						<button className='btn' onClick={handleTheme}>
							<img
								className='icon-img'
								src={
									theme === 'light-theme' ? moonIcon : sunIcon
								}
								alt='moon-icon'
							/>
						</button>
					</div>
					<form className='todo-form' onSubmit={handleSubmit}>
						<input
							type='text'
							className='todo-input'
							placeholder='Create a new todo'
							value={todoName}
							onChange={(e) => setTodoName(e.target.value)}
							required
						/>
					</form>
				</div>
			</div>
			<div className='todo-bottom-portion'>
				{todoList.length > 0 && (
					<div className='todo-list-container'>
						<List />
						<div className='todo-item todo-item-details'>
							<p className='left-item'>
								{todoList.length} items left
							</p>
							<button className='btn btn-clear-completed'>
								Clear Completed
							</button>
							<div className='btn-container'>
								<button className='btn btn-all'>All</button>
								<button className='btn btn-active'>
									Active
								</button>
								<button className='btn btn-completed'>
									Completed
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</main>
	)
}

export default App
