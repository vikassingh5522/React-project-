import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo({ task, description, time });
      setTask('');
      setDescription('');
      setTime('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded p-4 mb-4 flex flex-col gap-3 border border-gray-900"
    >
      <input
        type="text"
        placeholder="Enter Today Task "
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="p-3 border rounded  "
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 border rounded"
      ></textarea>
      <input
        type="datetime-local"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded"
      >
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;