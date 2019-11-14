import React, { Fragment, useState } from "react";
import Header from "./Header";
import Input from "./Input";
import TextArea from "./TextArea";
import smartDog from "./smartdog.jpg";
import styled from "styled-components";

const Form = styled.div`
  width: 80%;
  display: block;
  margin: auto;
  padding: 2rem;
  border: 0.5rem solid hsl(6, 80%, 63%);
  background: #ff6f6f;
  box-shadow: 9px 10px #fbefef;

  @media (max-width: 768px) {
    width: 66%;
  }
`;

const Button = styled.button`
  display: block;
  margin: 1.9rem auto 0rem;
  width: 11rem;
  height: 4rem;
  font-size: 2rem;
  font-weight: bold;
  box-shadow: 7px 10px black;
`;

const Thanks = styled.div`
  font-family: sans-serif;
  font-size: 3rem;
  text-shadow: 4px 3px white;
  text-align: center;
`;

const Image = styled.img`
  box-shadow: 15px 10px #7d5a5a;
  margin: 1.5rem 0rem -0.5rem;
`;

const endpoint =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://eng.med--lab.org";

const inputState = { name: "", email: "", why: "", category: "guild_app" };
function App() {
  const [fields, setFields] = useState(inputState);
  const [error, setError] = useState();
  const [confirmed, setConfirmed] = useState("");
  const [name, setName] = useState("name");
  const [width, setWidth] = useState(window.innerWidth / 2);

  const updateInput = e => {
    const newState = fields;
    newState[e.target.name] = e.target.value;
    setName(newState.name);
    setFields(newState);
  };

  const sendIt = () => {
    setError("");
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields)
    };

    fetch(endpoint + "/guild/responses", options)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
          return;
        }
        setConfirmed(data.status);
        return data;
      });
  };

  window.addEventListener("resize", () => setWidth(window.innerWidth / 2));

  return (
    <div className="App">
      <Header />
      <Form>
        {confirmed && (
          <Fragment>
            <Input updateInput={updateInput} title="name" />
            <Input updateInput={updateInput} title="email" />
            <TextArea updateInput={updateInput} title="why" />
            <div>{error}</div>
            <Button onClick={sendIt}>SENDIT</Button>
          </Fragment>
        )}
        {!confirmed && (
          <Thanks>
            <div>yay {name}!</div>
            <div>your response is under careful review</div>
            <Image width={width} src={smartDog} />
          </Thanks>
        )}
      </Form>
    </div>
  );
}

export default App;
