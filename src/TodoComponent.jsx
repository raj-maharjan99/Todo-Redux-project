// TodoComponent.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actions";

const TodoComponent = ({ todos, addTodo, removeTodo }) => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      addTodo({
        id: Date.now(), // Using timestamp as an ID (not the best practice, but simple)
        text,
      });
      setText("");
    }
  };

  const handleRemoveTodo = (todoId) => {
    removeTodo(todoId);
  };

  return (
    <div className="todo-container">
      <h2>TODO List</h2>
      <div className="todo-input">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your task..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

export default connect(mapStateToProps, { addTodo, removeTodo })(TodoComponent);
