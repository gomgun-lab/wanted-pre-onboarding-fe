import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid #293462;
  border-radius: 4px;
  background: #293462;
  color: white;
  margin-right: 1rem;
  text-decoration: none;
  display: inline-block;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #2b4865;
    border-color: #2b4865;
  }

  &:disabled,
  &:hover:disabled,
  &:active:disabled {
    background: #ccc;
    color: #979797;
    border-color: #ccc;
    cursor: not-allowed;
  }
`;

const Button = ({ type, onClick, disabled, children }) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
