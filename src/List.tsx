import { useGlobalContext } from "./context";
import crossIcon from "./assets/images/icon-cross.svg";
import checkIcon from "./assets/images/icon-check.svg";
import { todoListType } from "./reducer";

type Props = {
  todoList: todoListType[];
};

function List({ todoList }: Props) {
  const { removeSingleTodo, handleCompleted } = useGlobalContext();
  return (
    <>
      {todoList.map((todo) => {
        const { id, itemName, isDone } = todo;
        return (
          <div className='todo-item' key={id}>
            <button
              className={isDone ? "disk-btn check-btn" : "disk-btn"}
              onClick={() => handleCompleted(id)}
            >
              {isDone && <img src={checkIcon} alt='check-icon' />}
            </button>
            <p
              className={isDone ? "todo-single-item done" : "todo-single-item"}
            >
              {itemName}
            </p>
            <button className='btn' onClick={() => removeSingleTodo(id)}>
              <img className='cross-icon' src={crossIcon} alt='cross-icon' />
            </button>
          </div>
        );
      })}
    </>
  );
}

export default List;
