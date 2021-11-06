export const reducer = (state, action) => {
	if (action.type === 'CHANGE_THEME') {
		return {
			...state,
			theme: state.theme === 'light-theme' ? 'dark-theme' : 'light-theme',
		}
	}
	if (action.type === 'ADD_TODO_ITEM') {
		return { ...state, todoList: [...state.todoList, action.payload] }
	}
	if (action.type === 'REMOVE_SINGLE_TODO') {
		const newTodoList = state.todoList.filter(
			(todo) => todo.id !== action.payload
		)
		return { ...state, todoList: newTodoList }
	}
	if (action.type === 'HANDLE_COMPLETED') {
		const newItemList = state.todoList.map((todo) => {
			if (todo.id === action.payload) {
				return { ...todo, isDone: !todo.isDone }
			}
			return todo
		})
		return { ...state, todoList: newItemList }
	}
	if (action.type === 'CLEAR_COMPLETED_TODOS') {
		const newTodoList = state.todoList.filter(
			(todo) => todo.isDone === false
		)
		return { ...state, todoList: newTodoList }
	}
	if (action.type === 'SHOW_ALL_TODOS') {
		return {
			...state,
			todoList: state.todoList,
			isShowAll: true,
			isShowActive: false,
			isShowCompleted: false,
		}
	}
	if (action.type === 'SHOW_ACTIVE_TODOS') {
		const activeTodos = state.todoList.filter(
			(todo) => todo.isDone === false
		)
		return {
			...state,
			active: activeTodos,
			isShowActive: true,
			isShowAll: false,
			isShowCompleted: false,
		}
	}
	if (action.type === 'SHOW_COMPLETED_TODOS') {
		const completedTodos = state.todoList.filter(
			(todo) => todo.isDone === true
		)
		return {
			...state,
			completed: completedTodos,
			isShowActive: false,
			isShowAll: false,
			isShowCompleted: true,
		}
	}
	return state
}
