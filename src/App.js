import React from "react";
import Header from "./Header";
import Input from "./Input";
import TextArea from "./TextArea";
import styled from "styled-components";

const Form = styled.div`
  width: 80%;
  display: block;
  margin: auto;
  padding: 2rem;
  border: 0.4rem solid hsl(120, 100%, 82%);
  background: #ff6f6f;
  box-shadow: 9px 10px #fbefef;

  @media (max-width: 768px) {
    width: 66%;
  }
`;
function App() {
  return (
    <div className="App">
      <Header />
      <Form>
        <Input title="NAME" />
        <Input title="EMAIL" />
        <TextArea title="WHY" />
      </Form>
    </div>
  );
}

export default App;
