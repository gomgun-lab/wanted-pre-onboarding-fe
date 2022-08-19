import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  padding: 1rem;
  overflow: hidden;
  background: white;
`;

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
