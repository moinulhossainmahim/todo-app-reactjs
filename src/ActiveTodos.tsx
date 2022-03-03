import React from "react";
import List from "./List";
import { useGlobalContext } from "./context";

function ActiveTodos() {
  const {
    state: { active },
    clearCompletedTodo,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos,
  } = useGlobalContext();

  if (active.length === 0) {
    return (
      <div className='todo-list-container'>
        <div className='todo-item todo-item-details'>
          <p className='left-item'>{active.length} items left</p>
          <button
            className='btn btn-clear-completed'
            onClick={clearCompletedTodo}
          >
            Clear Completed
          </button>
          <div className='btn-container'>
            <button className='btn' onClick={showAllTodos}>
              All
            </button>
            <button className='btn btn-active' onClick={showActiveTodos}>
              Active
            </button>
            <button className='btn btn-completed' onClick={showCompletedTodos}>
              Completed
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='todo-list-container'>
      <List todoList={active} />
      <div className='todo-item todo-item-details'>
        <p className='left-item'>{active.length} items left</p>
        <button
          className='btn btn-clear-completed'
          onClick={clearCompletedTodo}
        >
          Clear Completed
        </button>
        <div className='btn-container'>
          <button className='btn' onClick={showAllTodos}>
            All
          </button>
          <button className='btn btn-active' onClick={showActiveTodos}>
            Active
          </button>
          <button className='btn btn-completed' onClick={showCompletedTodos}>
            Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActiveTodos;
