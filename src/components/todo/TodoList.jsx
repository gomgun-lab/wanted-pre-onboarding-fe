import React from "react";

import Card from "../common/Card";
import TodoItem from "./TodoItem";

const TodoList = ({ localTodos, isLoading, fetchTodos }) => {
  return (
    <Card>
      {localTodos && !isLoading && (
        <ul>
          {localTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              completeState={todo.isCompleted}
              fetchTodos={fetchTodos}
            />
          ))}
        </ul>
      )}
      {localTodos.length === 0 && <p>할 일을 추가해주세요.</p>}
    </Card>
  );
};

export default TodoList;
