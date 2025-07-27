import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now(), completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo)));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-6">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default App;