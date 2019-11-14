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

const Input = ({ title, updateInput }) => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Title>
        <div>{title}</div>
      </Title>
      <Field name={title} onChange={updateInput} />
    </div>
  );
};

export default Input;
