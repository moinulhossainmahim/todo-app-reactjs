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
	return state
}
