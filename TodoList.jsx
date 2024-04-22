import React from "react";
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["sample task"]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const updateTodoValue = (e) => {
    setNewTodo(e.target.value);
  };
  const delateTodo = (index)=>{
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />
      <h4>TodoList</h4>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <span>{todo}</span>
              &nbsp;
              <button onClick={()=>delateTodo(index)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
import React from "react";
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["sample task"]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const updateTodoValue = (e) => {
    setNewTodo(e.target.value);
  };
  const delateTodo = (index)=>{
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />
      <h4>TodoList</h4>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <span>{todo}</span>
              &nbsp;
              <button onClick={()=>delateTodo(index)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
