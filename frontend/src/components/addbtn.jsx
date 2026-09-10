import { useState , useEffect } from 'react';
import AnimatedCard from './AnimatedCard.jsx';
export default function AddBtn() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
  const loadTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/todos");
      if (!response.ok) throw new Error('Could not load your tasks.');
      setTodoList(await response.json());
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setIsLoading(false);
    }
  };

  loadTodos();
}, []);

  const handlechange = (e) => {
    setNewTask(e.target.value);
  }
  const addTask = async (e) => {
  e.preventDefault();

  if (!newTask.trim()) return;

  try {
    const response = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newTask.trim(), completed: false })
    });
    if (!response.ok) throw new Error('Could not save that task.');
    setTodoList([...todoList, await response.json()]);
    setNewTask("");
    setError('');
  } catch (addError) {
    setError(addError.message);
  }
};
  const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/todos/${taskId}`, { method: "DELETE" });
    if (!response.ok) throw new Error('Could not delete that task.');
    setTodoList(todoList.filter((task) => task._id !== taskId));
  } catch (deleteError) {
    setError(deleteError.message);
  }
};
  const complete = async (taskId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/todos/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: true })
    });
    if (!response.ok) throw new Error('Could not complete that task.');
    setTodoList(todoList.map((task) => task._id === taskId ? { ...task, completed: true } : task));
  } catch (completeError) {
    setError(completeError.message);
  }
};

  return (
    <section className="todo-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">YOUR LIST</p>
          <h2>Make room<br /><em>for what matters.</em></h2>
        </div>
        <span className="task-count">{todoList.length} {todoList.length === 1 ? 'task' : 'tasks'}</span>
      </div>
    <form className="task-form">
      <label className="sr-only" htmlFor="new-task">New task</label>
      <input id="new-task" className="task-input"
        value={newTask}
        onChange={handlechange}
        placeholder="What needs your attention?"
      />
      <button className="add-button" onClick={addTask}>
        <span aria-hidden="true">+</span> Add task
      </button>
    </form>
    {error && <p className="error-message" role="alert">{error}</p>}
    <div className="todo-list">
      {isLoading && <p className="state-message">Loading your tasks...</p>}
      {!isLoading && !error && todoList.length === 0 && <p className="state-message">Your list is clear. Add one small thing to begin.</p>}
      {todoList.map((task) => (
  <AnimatedCard
    key={task._id}
    task={task.text}
    completed={task.completed}
    onDelete={() => deleteTask(task._id)}
    completedTask={() => complete(task._id)}
  />
))}
    </div>
    </section>
  );
}

