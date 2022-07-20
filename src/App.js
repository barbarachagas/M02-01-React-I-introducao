import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  console.log("Teste no console do navegador");

  return (
    <>
      <Header>Projeto base para o Módulo React I</Header>
      <Main>
        <p>
          O seu nome é Barbara Chagas, com XX caracteres, e você possui 28 anos.
        </p>
      </Main>
    </>
  );
}
