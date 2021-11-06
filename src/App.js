import React from 'react'
import { useGlobalContext } from './context'
import ActiveTodos from './ActiveTodos'
import CompletedTodos from './CompletedTodos'
import bgLight from './assets/images/bg-desktop-light.jpg'
import bgDark from './assets/images/bg-desktop-dark.jpg'
import moonIcon from './assets/images/icon-moon.svg'
import sunIcon from './assets/images/icon-sun.svg'
import AllTodos from './AllTodos'

function App() {
	const {
		isShowAll,
		isShowActive,
		isShowCompleted,
		theme,
		handleTheme,
		todoName,
		setTodoName,
		handleSubmit,
	} = useGlobalContext()

	const handleImg = (image) => {
		console.log(image)
	}

	return (
		<main className='todo-main'>
			<div className='todo-top-portion'>
				<img
					src={theme === 'light-theme' ? bgLight : bgDark}
					alt='light-bg'
					className='todo-top-image'
					onClick={() => handleImg(this)}
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
				{isShowAll && <AllTodos />}
				{isShowActive && <ActiveTodos />}
				{isShowCompleted && <CompletedTodos />}
				{/* {todoList.length > 0 && (
					<div className='todo-list-container'>
						<List />
						<div className='todo-item todo-item-details'>
							<p className='left-item'>
								{todoList.length} items left
							</p>
							<button
								className='btn btn-clear-completed'
								onClick={clearCompletedTodo}
							>
								Clear Completed
							</button>
							<div className='btn-container'>
								<button
									className='btn btn-all'
									onClick={showAllTodos}
								>
									All
								</button>
								<button
									className='btn btn-active'
									onClick={showActiveTodos}
								>
									Active
								</button>
								<button
									className='btn btn-completed'
									onClick={showCompletedTodos}
								>
									Completed
								</button>
							</div>
						</div>
					</div>
				)} */}
			</div>
		</main>
	)
}

export default App
