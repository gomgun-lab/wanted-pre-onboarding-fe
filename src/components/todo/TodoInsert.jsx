import styled from "styled-components";

import { MdAdd } from "react-icons/md";
import Button from "../common/Button";

import useTodoItem from "../../hooks/todo/useTodoItem";
import TodoService from "../../services/todo.service";

const TodoInsertContainer = styled.div`
  display: flex;
  background-color: #eee;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: none;
  background: none;
  outline: none;
  font-size: 1.1rem;
  box-sizing: border-box;
  flex: 1;
`;

const TodoInsert = ({ fetchTodos }) => {
  const { value, isValid, changeHandler, setValue } = useTodoItem();

  const addTodo = async () => {
    if (!isValid) return;
    await TodoService.createTodo(value);
    await fetchTodos();
    setValue("");
  };

  return (
    <TodoInsertContainer>
      <StyledInput value={value} onChange={changeHandler} />
      <Button onClick={addTodo}>
        <MdAdd />
      </Button>
    </TodoInsertContainer>
  );
};

export default TodoInsert;
