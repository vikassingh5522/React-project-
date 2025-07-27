import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, editTodo, toggleComplete }) {
    return (
        <div className="space-y-4">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    toggleComplete={toggleComplete}
                />
            ))}
        </div>
    );
}

export default TodoList;