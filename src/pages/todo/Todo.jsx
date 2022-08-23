import React, { Fragment } from "react";
import styled from "styled-components";

import Header from "../../components/layout/Header";
import TodoInsert from "../../components/todo/TodoInsert";
import TodoList from "../../components/todo/TodoList";

import useTodo from "../../hooks/todo/useTodo";

const StyledTodo = styled.div`
  width: 100%;
  max-width: 25rem;
  margin: 7rem auto;
`;

const Todo = () => {
  const { localTodos, isLoading, fetchTodos } = useTodo();

  return (
    <Fragment>
      <Header />
      <StyledTodo>
        <TodoInsert fetchTodos={fetchTodos} />
        <hr />
        <TodoList
          localTodos={localTodos}
          isLoading={isLoading}
          fetchTodos={fetchTodos}
        />
      </StyledTodo>
    </Fragment>
  );
};

export default Todo;
