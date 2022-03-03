import { useGlobalContext } from "./context";
import ActiveTodos from "./ActiveTodos";
import CompletedTodos from "./CompletedTodos";
import bgLight from "./assets/images/bg-desktop-light.jpg";
import bgDark from "./assets/images/bg-desktop-dark.jpg";
import moonIcon from "./assets/images/icon-moon.svg";
import sunIcon from "./assets/images/icon-sun.svg";
import AllTodos from "./AllTodos";

function App() {
  const {
    handleSubmit,
    state: { isShowAll, isShowCompleted, isShowActive, theme },
    handleTheme,
    setTodoName,
    todoName,
  } = useGlobalContext();

  return (
    <main className='todo-main'>
      <div className='todo-top-portion'>
        <img
          src={theme === "light-theme" ? bgLight : bgDark}
          alt='light-bg'
          className='todo-top-image'
        />
        <div className='todo-header'>
          <div className='todo-header-top'>
            <h2 className='todo-text'>Todo</h2>
            <button className='btn' onClick={handleTheme}>
              <img
                className='icon-img'
                src={theme === "light-theme" ? moonIcon : sunIcon}
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
      </div>
    </main>
  );
}

export default App;
