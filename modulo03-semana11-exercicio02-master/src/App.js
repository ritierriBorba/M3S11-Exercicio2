import './App.css';
import React from 'react';

function Bemvindo(props) {
  return <h2>Bem vindo {props.nome}</h2>
}

function App() {
  return (
    <div>
      <Bemvindo nome="Victor" />
      <Bemvindo nome="Luana" />
      <Bemvindo nome="Ana" />
    </div>
  );

}

export default App;
