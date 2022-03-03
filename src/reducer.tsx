export enum actionType {
  ADD_TODO_ITEM = "ADD_TODO_ITEM",
  REMOVE_SINGLE_TODO = "REMOVE_SINGLE_TODO",
  HANDLE_COMPLETED = "HANDLE_COMPLETED",
  CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS",
  SHOW_ALL_TODOS = "SHOW_ALL_TODOS",
  SHOW_ACTIVE_TODOS = "SHOW_ACTIVE_TODOS",
  SHOW_COMPLETED_TODOS = "SHOW_COMPLETED_TODOS",
  CHANGE_THEME = "CHANGE_THEME",
}

export type todoListType = {
  id: string;
  itemName: string;
  isDone: boolean;
};

export type todoState = {
  todoList: todoListType[];
  active: todoListType[];
  completed: todoListType[];
  isShowAll: boolean;
  isShowActive: boolean;
  isShowCompleted: boolean;
  theme: string;
};

const getLocalStroage = () => {
  let theme: any = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

export const initialState: todoState = {
  todoList: [],
  active: [],
  completed: [],
  theme: getLocalStroage(),
  isShowAll: true,
  isShowActive: false,
  isShowCompleted: false,
};

type todoActionType = {
  type: actionType;
  payload?: todoListType | string;
};

export const reducer = (
  state = initialState,
  action: todoActionType
): todoState => {
  if (action.type === actionType.CHANGE_THEME) {
    return {
      ...state,
      theme: state.theme === "light-theme" ? "dark-theme" : "light-theme",
    };
  }
  if (action.type === actionType.ADD_TODO_ITEM) {
    const allTodoList = [...state.todoList, action.payload] as todoListType[];
    return { ...state, todoList: allTodoList };
  }
  if (action.type === actionType.REMOVE_SINGLE_TODO) {
    const newTodoList = state.todoList.filter(
      (todo) => todo.id !== action.payload
    );
    return { ...state, todoList: newTodoList };
  }
  if (action.type === actionType.HANDLE_COMPLETED) {
    const newItemList = state.todoList.map((todo) => {
      if (todo.id === action.payload) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    return { ...state, todoList: newItemList };
  }
  if (action.type === actionType.CLEAR_COMPLETED_TODOS) {
    const newTodoList = state.todoList.filter((todo) => todo.isDone === false);
    return { ...state, todoList: newTodoList };
  }
  if (action.type === actionType.SHOW_ALL_TODOS) {
    return {
      ...state,
      todoList: state.todoList,
      isShowAll: true,
      isShowActive: false,
      isShowCompleted: false,
    };
  }
  if (action.type === actionType.SHOW_ACTIVE_TODOS) {
    const activeTodos = state.todoList.filter((todo) => todo.isDone === false);
    return {
      ...state,
      active: activeTodos,
      isShowActive: true,
      isShowAll: false,
      isShowCompleted: false,
    };
  }
  if (action.type === actionType.SHOW_COMPLETED_TODOS) {
    const completedTodos = state.todoList.filter(
      (todo) => todo.isDone === true
    );
    return {
      ...state,
      completed: completedTodos,
      isShowActive: false,
      isShowAll: false,
      isShowCompleted: true,
    };
  }
  return state;
};
