import { useState } from 'react';
import AnimatedCard from './AnimatedCard.jsx';
export default function AddBtn() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handlechange = (e) => {
    setNewTask(e.target.value);
  }
  const addTask = (e) =>{
    e.preventDefault();
    if (!newTask.trim()) return;
    const newTodoList = [...todoList, newTask.trim()];
    setTodoList(newTodoList);
    setNewTask('');
  }
  const deleteTask = (taskIndex) => {
    setTodoList(todoList.filter((_, index) => index !== taskIndex));
  }

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
      {todoList.map((task, index) => (
        <AnimatedCard
          key={`${task}-${index}`}
          task={task}
          onDelete={() => deleteTask(index)}
        />
      ))}
    </div>
    </>    
  );
}

