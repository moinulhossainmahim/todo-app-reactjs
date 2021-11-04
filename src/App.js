import React, { useEffect, useState } from 'react'
import bgLight from './assets/images/bg-desktop-light.jpg'
import bgDark from './assets/images/bg-desktop-dark.jpg'
import moonIcon from './assets/images/icon-moon.svg'
import sunIcon from './assets/images/icon-sun.svg'
import crossIcon from './assets/images/icon-cross.svg'

const getLocalStroage = () => {
	let theme = 'light-theme'
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme')
	}
	return theme
}

function App() {
	const [theme, setTheme] = useState(getLocalStroage)
	const [defaultIcon, setDefaultIcon] = useState(true)
	const handleTheme = () => {
		if (theme === 'light-theme') {
			setTheme('dark-theme')
			setDefaultIcon(false)
		} else {
			setTheme('light-theme')
			setDefaultIcon(true)
		}
	}

	useEffect(() => {
		document.documentElement.classList = theme
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<main className='todo-main'>
			<div className='todo-top-portion'>
				<img
					src={defaultIcon ? bgLight : bgDark}
					alt='light-bg'
					className='todo-top-image'
				/>
				<div className='todo-header'>
					<div className='todo-header-top'>
						<h2 className='todo-text'>Todo</h2>
						<button className='btn' onClick={handleTheme}>
							<img
								className='icon-img'
								src={defaultIcon ? moonIcon : sunIcon}
								alt='moon-icon'
							/>
						</button>
					</div>
					<form className='todo-form'>
						<input
							type='text'
							className='todo-input'
							placeholder='Create a new todo'
						/>
					</form>
				</div>
			</div>
			<div className='todo-bottom-portion'>
				<div className='todo-list-container'>
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
				</div>
			</div>
		</main>
	)
}

export default App

// components types
// 1. app component
// 2. List component for each
