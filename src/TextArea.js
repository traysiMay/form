import React from "react";
import styled from "styled-components";
import { Title } from "./styles";

const TArea = styled.textarea`
  margin: auto;
  display: block;
  width: 31rem;
  height: 20rem;

  @media (max-width: 768px) {
    width: 15rem;
    height: 12rem;
  }
`;
const TextArea = ({ title }) => {
  return (
    <div>
      <Title>{title}</Title>
      <TArea></TArea>
    </div>
  );
};

export default TextArea;
