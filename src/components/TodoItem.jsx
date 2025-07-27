import React, { useState } from 'react';

function TodoItem({ todo, deleteTodo, editTodo, toggleComplete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(todo.task);
    const [newDescription, setNewDescription] = useState(todo.description);
    const [newTime, setNewTime] = useState(todo.time);

    const handleEdit = () => {
        editTodo(todo.id, {
            task: newTask,
            description: newDescription,
            time: newTime,
        });
        setIsEditing(false);
    };

    return (
        <div className={`bg-white p-5 rounded-xl shadow-md border ${todo.completed ? 'border-green-400 bg-green-50' : 'border-gray-300'}`}>
            {isEditing ? (
                <div className="space-y-2">
                    <input
                        className="w-full p-2 border rounded focus:outline-none"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <textarea
                        className="w-full p-2 border rounded focus:outline-none"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                    />
                    <input
                        type="datetime-local"
                        className="w-full p-2 border rounded focus:outline-none"
                        value={newTime}
                        onChange={(e) => setNewTime(e.target.value)}
                    />
                    <button
                        onClick={handleEdit}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Save
                    </button>
                </div>
            ) : (
                <div className="space-y-1">
                    <h2 className="text-xl font-bold text-gray-800">{todo.task}</h2>
                    <p className="text-gray-700">{todo.description}</p>
                    <p className="text-sm text-gray-500">Due: {todo.time}</p>
                    <div className="mt-3 flex gap-2 flex-wrap">
                        <button
                            onClick={() => toggleComplete(todo.id)}
                            className={`px-4 py-1 rounded text-white ${todo.completed ? 'bg-yellow-500' : 'bg-indigo-600'} hover:opacity-90`}
                        >
                            {todo.completed ? 'Undo' : 'End Task'}
                        </button>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TodoItem;