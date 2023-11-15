import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/helloworld/HelloWorld";
import Frase from "./components/frase/Frase";
import Header from "./components/header/Header";
import SayMyName from "./components/saymyname/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/Lista/List";
function App() {
return (
<div>
      <HelloWorld />
      <hr />
      <Pessoa nome="lucas" idade="35" profissao="Matador" />
      <hr />
      <SayMyName nome="gabriel l" />
      <hr />
      <List />
    </div>
  );
}

export default App;
