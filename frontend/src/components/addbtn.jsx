import { useState , useEffect } from 'react';
import AnimatedCard from './AnimatedCard.jsx';
export default function AddBtn() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');
  useEffect(() => {
  const loadTodos = async () => {
    const response = await fetch("http://localhost:3000/api/todos");
    const todos = await response.json();

    setTodoList(todos);
  };

  loadTodos();
}, []);

  const handlechange = (e) => {
    setNewTask(e.target.value);
  }
  const addTask = async (e) => {
  e.preventDefault();

  if (!newTask.trim()) return;

  const response = await fetch("http://localhost:3000/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: newTask.trim(),
      completed: false
    })
  });

  const savedTodo = await response.json();

  setTodoList([...todoList, savedTodo]);
  setNewTask("");
};
  const deleteTask = async (taskId) => {
  await fetch(`http://localhost:3000/api/todos/${taskId}`, {
    method: "DELETE"
  });

  setTodoList(
    todoList.filter((task) => task._id !== taskId)
  );
};
  const complete = async (taskId) => {
  await fetch(`http://localhost:3000/api/todos/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      completed: true
    })
  });

  setTodoList(
    todoList.map((task) =>
      task._id === taskId
        ? { ...task, completed: true }
        : task
    )
  );
};

  return (
    <>
    <form  style={{ display: 'flex', gap: '8px', padding: '45px' , marginTop: '50px ' }}>
      <input style={{border: 'none', padding: '12px', borderRadius: '12px', flex: 1 ,boxShadow: "0 4px 8px rgba(0,0,0,0.1)"}}
        value={newTask}
        onChange={handlechange}
        placeholder="Enter a new task"
      />
      <button onClick={addTask} style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '12px', cursor: 'pointer' }}>
        Add Task
      </button>
    </form>
    <div className="todo-list" style={{ marginTop: '20px', padding: '0 45px' }}>
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
    </>    
  );
}

