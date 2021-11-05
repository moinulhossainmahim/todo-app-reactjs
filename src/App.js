import React, { useEffect, useState } from 'react'
import bgLight from './assets/images/bg-desktop-light.jpg'
import bgDark from './assets/images/bg-desktop-dark.jpg'
import moonIcon from './assets/images/icon-moon.svg'
import sunIcon from './assets/images/icon-sun.svg'
import List from './List.js'

const getLocalStroage = () => {
	let theme = 'light-theme'
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme')
	}
	return theme
}

function App() {
	const [theme, setTheme] = useState(getLocalStroage)
	const [todoList, setTodoList] = useState([])
	const [todoName, setTodoName] = useState('')
	console.log(todoList)

	const handleTheme = () => {
		if (theme === 'light-theme') {
			setTheme('dark-theme')
		} else {
			setTheme('light-theme')
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const newTodoList = {
			id: new Date().getTime().toString(),
			itemName: todoName,
		}
		setTodoList([...todoList, newTodoList])
		setTodoName('')
	}

	const removeSingleTodo = (id) => {
		setTodoList(todoList.filter((todoItem) => todoItem.id !== id))
	}
	useEffect(() => {
		document.documentElement.classList = theme
		localStorage.setItem('theme', theme)
	}, [theme])

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
						<List list={todoList} removeItem={removeSingleTodo} />
						<div className='todo-item todo-item-details'>
							<p>{todoList.length} items left</p>
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
				{/* <div className='todo-list-container'>
						<div className='todo-item'>
							<button className='disk-btn'></button>
							<p>Complete Online JavaScript Course</p>
							<button className='btn'>
								<img
									className='cross-icon'
									src={crossIcon}
									alt='cross-icon'
								/>
							</button>
						</div>
						<div className='todo-item'>
							<button className='disk-btn'></button>
							<p>Complete Frontend Mentor Challenge</p>
							<button className='btn'>
								<img
									className='cross-icon'
									src={crossIcon}
									alt='cross-icon'
								/>
							</button>
						</div>
						<div className='todo-item todo-item-details'>
							<p>3 items left</p>
							<button className='btn btn-clear-completed'>
								Clear Completed
							</button>
							<div className='btn-container'>
								<button className='btn btn-all'>All</button>
								<button className='btn btn-active'>Active</button>
								<button className='btn btn-completed'>
									Completed
								</button>
							</div>
						</div>	
					</div> */}
			</div>
		</main>
	)
}

export default App

// components types
// 1. app component
// 2. List component for each
