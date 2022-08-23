import React, { useState, useCallback } from "react";
import styled from "styled-components";

import useTodoItem from "../../hooks/todo/useTodoItem";
import TodoService from "../../services/todo.service";

import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdUndo,
  MdAddCircleOutline,
  MdModeEdit,
} from "react-icons/md";

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    background-color: #eee;
  }
`;

const StyledInput = styled.input`
  padding: 10px;
  border: none;
  background: none;
  outline: none;
  font-size: 1.1rem;
  box-sizing: border-box;
  overflow: hidden;
  flex: 1;
`;

const IconContainer = styled.div`
  cursor: pointer;
  align-items: center;
  font-size: 1.5rem;
`;

const TodoItem = ({ id, todo, completeState, fetchTodos }) => {
  const { value, isValid, changeHandler, setValue } = useTodoItem(todo);

  const [isEditMode, setIsEditMode] = useState(false);
  const [isCompleted, setIsCompleted] = useState(completeState);

  const cancleEdit = useCallback(() => {
    setIsEditMode(false);
    setValue(todo);
  }, [todo, setValue]);

  const confirmEdit = useCallback(async () => {
    setIsEditMode(false);
    if (!isValid) cancleEdit();
    await TodoService.updateTodo(id, value, isCompleted);
    await fetchTodos();
  }, [id, value, isCompleted, fetchTodos, isValid, cancleEdit]);

  const deleteTodo = useCallback(async () => {
    await TodoService.deleteTodo(id);
    await fetchTodos();
  }, [id, fetchTodos]);

  const changeCompletedState = useCallback(async () => {
    if (isEditMode) {
      cancleEdit();
    }
    setIsCompleted((prev) => !prev);
    await TodoService.updateTodo(id, value, !isCompleted);
  }, [id, value, isCompleted, cancleEdit, isEditMode]);

  return (
    <li>
      <TodoItemContainer>
        <IconContainer onClick={changeCompletedState}>
          {isCompleted && <MdCheckBox />}
          {!isCompleted && <MdCheckBoxOutlineBlank />}
        </IconContainer>
        <StyledInput
          value={value}
          disabled={!isEditMode}
          isCompleted={isCompleted}
          onChange={changeHandler}
        />
        <IconContainer>
          {isEditMode && <MdUndo onClick={cancleEdit} />}
          {isEditMode && <MdAddCircleOutline onClick={confirmEdit} />}
        </IconContainer>
        <IconContainer>
          {!isEditMode && (
            <MdModeEdit onClick={() => setIsEditMode((prev) => !prev)} />
          )}
          {!isEditMode && <MdRemoveCircleOutline onClick={deleteTodo} />}
        </IconContainer>
      </TodoItemContainer>
    </li>
  );
};

export default TodoItem;
