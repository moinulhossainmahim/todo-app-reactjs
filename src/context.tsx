import React, { useState, useEffect, useReducer, useContext } from "react";
import { reducer, initialState, todoState, actionType } from "./reducer";

type AppProviderProps = {
  children: React.ReactNode;
};

type AppContextProps = {
  state: todoState;
  todoName: string;
  setTodoName: React.Dispatch<React.SetStateAction<string>>;
  handleTheme: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  removeSingleTodo: (id: string) => void;
  handleCompleted: (id: string) => void;
  clearCompletedTodo: () => void;
  showAllTodos: () => void;
  showActiveTodos: () => void;
  showCompletedTodos: () => void;
};

const AppContext = React.createContext({} as AppContextProps);

const AppProvider = ({ children }: AppProviderProps) => {
  const [todoName, setTodoName] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTheme = () => {
    dispatch({ type: actionType.CHANGE_THEME });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodoList = {
      id: new Date().getTime().toString(),
      itemName: todoName,
      isDone: false,
    };
    dispatch({ type: actionType.ADD_TODO_ITEM, payload: newTodoList });
    setTodoName("");
  };

  const removeSingleTodo = (id: string) => {
    dispatch({ type: actionType.REMOVE_SINGLE_TODO, payload: id });
  };

  const handleCompleted = (id: string) => {
    dispatch({ type: actionType.HANDLE_COMPLETED, payload: id });
  };

  const clearCompletedTodo = () => {
    dispatch({ type: actionType.CLEAR_COMPLETED_TODOS });
  };

  const showAllTodos = () => {
    dispatch({ type: actionType.SHOW_ALL_TODOS });
  };

  const showActiveTodos = () => {
    dispatch({ type: actionType.SHOW_ACTIVE_TODOS });
  };

  const showCompletedTodos = () => {
    dispatch({ type: actionType.SHOW_COMPLETED_TODOS });
  };

  useEffect(() => {
    // @ts-ignore
    document.documentElement.classList = state.theme;
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  return (
    <AppContext.Provider
      value={{
        state: { ...state },
        todoName,
        setTodoName,
        handleTheme,
        handleSubmit,
        removeSingleTodo,
        handleCompleted,
        clearCompletedTodo,
        showAllTodos,
        showActiveTodos,
        showCompletedTodos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
