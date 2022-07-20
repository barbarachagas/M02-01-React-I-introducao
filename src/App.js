import { useState } from "react";
import CheckboxInput from "./components/CheckboxInput";
import DateInput from "./components/DateInput";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import Timer from "./components/Timer";
import { getAgeFrom } from "./helpers/dateHelpers";

export default function App() {
  const [name, setName] = useState("Barbara");
  const [birthDate, setBirthDate] = useState("1993-11-04");
  const [showTimer, setShowTimer] = useState(false);

  function handleNameChange(newName) {
    setName(newName);
  }
  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }
  function toggleShowTimer() {
    setShowTimer((currentShowTimer) => !currentShowTimer);
  }
  return (
    <>
      <Header>React Hello</Header>
      <Main>
        {showTimer && (
          <div className="text-right mt-1">
            <Timer />
          </div>
        )}
        <CheckboxInput
          labelDescription="Mostrar timer"
          onCheckboxChange={toggleShowTimer}
        />
        <DateInput
          labelDescription="Digite sua data de nascimento: "
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
          id="input-de-data"
        />
        <TextInput
          labelDescription="Escreva o seu nome"
          inputValue={name}
          onInputChange={handleNameChange}
          id="input-de-nome"
        />
        <p>
          O seu nome é {name}, com {name.length} caracteres, e você possui{" "}
          {getAgeFrom(birthDate)} anos.
        </p>
      </Main>
    </>
  );
}
