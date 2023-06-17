import React from "react";

import { useState } from "react";
import AddTodo from "./AddTodo.js";
import TaskList from "./TaskList.js";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    let newTodos = todos.slice();
    newTodos.push({
      id: nextId++,
      title: title,
      done: false,
    });
    setTodos(newTodos);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.slice().map((todo) => (todo.id === nextTodo.id ? nextTodo : todo))
    );
  }

  function handleDeleteTodo(todoId) {
    const index = todos.findIndex((t) => t.id === todoId);
    setTodos(todos.slice(0, index).concat(todos.slice(index + 1)));
  }

  return (
    <React.Fragment>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </React.Fragment>
  );
}
