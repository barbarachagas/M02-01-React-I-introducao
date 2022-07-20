import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const [name, setName] = useState("Barbara");

  function handleNameChange(event) {
    setName(event.currentTarget.value);
  }

  return (
    <>
      <Header>React Hello</Header>
      <Main>
        <div className="flex flex-col my-4">
          <label htmlFor="input-name" className="text-sm mb-1">
            Digite o seu nome:
          </label>
          <input
            id="input-name"
            autoFocus
            className="border p-1"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <p>
          O seu nome é {name}, com {name.length} caracteres, e você possui 28
          anos.
        </p>
      </Main>
    </>
  );
}
