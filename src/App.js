import { useState } from "react";
import DateInput from "./components/DateInput";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import { getAgeFrom } from "./helpers/dateHelpers";

export default function App() {
  const [name, setName] = useState("Barbara");
  const [birthDate, setBirthDate] = useState("1993-11-04");

  function handleNameChange(newName) {
    setName(newName);
  }
  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  return (
    <>
      <Header>React Hello</Header>
      <Main>
        <DateInput
          labelDescription="Digite sua data de nascimento: "
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />
        <TextInput
          labelDescription="Escreva o seu nome"
          inputValue={name}
          onInputChange={handleNameChange}
        />
        <p>
          O seu nome é {name}, com {name.length} caracteres, e você possui{" "}
          {getAgeFrom(birthDate)} anos.
        </p>
      </Main>
    </>
  );
}
