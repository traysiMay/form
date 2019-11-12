import React from "react";
import styled from "styled-components";
import { Title } from "./styles";

const Field = styled.input`
  display: block;
  margin: 1rem auto;
  width: 21rem;
  height: 2rem;
  font-size: 1rem;
  text-align: center;
  font-family: monospace;
  box-shadow: 8px 8px black;

  @media (max-width: 768px) {
    width: 13rem;
  }
`;

const Input = ({ title }) => {
  return (
    <div>
      <Title>{title}</Title>
      <Field />
    </div>
  );
};

export default Input;
