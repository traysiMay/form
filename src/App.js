import React from "react";
import Header from "./Header";
import Input from "./Input";
import TextArea from "./TextArea";

function App() {
  return (
    <div className="App">
      <Header />
      <Input title="NAME" />
      <Input title="EMAIL" />
      <TextArea title="WHY" />
    </div>
  );
}

export default App;
