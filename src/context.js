import React, { useState, useEffect, useReducer, useContext } from 'react'
import { reducer } from './reducer'

const AppContext = React.createContext()

const getLocalStroage = () => {
	let theme = 'light-theme'
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme')
	}
	return theme
}

const initialState = {
	todoList: [],
	theme: getLocalStroage(),
}

const AppProvider = ({ children }) => {
	const [todoName, setTodoName] = useState('')
	const [state, dispatch] = useReducer(reducer, initialState)

	const handleTheme = () => {
		dispatch({ type: 'CHANGE_THEME' })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const newTodoList = {
			id: new Date().getTime().toString(),
			itemName: todoName,
			isDone: false,
		}
		dispatch({ type: 'ADD_TODO_ITEM', payload: newTodoList })
		setTodoName('')
	}

	const removeSingleTodo = (id) => {
		dispatch({ type: 'REMOVE_SINGLE_TODO', payload: id })
	}

	const handleCompleted = (id) => {
		dispatch({ type: 'HANDLE_COMPLETED', payload: id })
	}

	useEffect(() => {
		document.documentElement.classList = state.theme
		localStorage.setItem('theme', state.theme)
	}, [state.theme])

	return (
		<AppContext.Provider
			value={{
				...state,
				todoName,
				setTodoName,
				handleTheme,
				handleSubmit,
				removeSingleTodo,
				handleCompleted,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }
