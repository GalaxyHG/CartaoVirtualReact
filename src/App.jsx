import React, { useState } from "react"; // Pelo amor de Deus não tira isso daqui.
import "./App.css";

const InputComponent = () => {
  // Definir o estado para armazenar o valor do input
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Atualizar o estado com o novo valor do input
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar o comportamento padrão de envio do formulário
    console.log("Valor do input:", inputValue); // Exibir o valor do input no console
    // Aqui você pode enviar o valor para outras partes da sua aplicação ou fazer o que for necessário
  };

  return ( //HTML que será retornado
    <>
      <div className="container">
        <div className="card-container">
          <div className="card">{inputValue}</div>
          <label for="nome">Nome:</label>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <br />
          <label for="nome">Número do Cartão:</label>
          <input type="text" />
        </div>
      </div>
    </>
  );
};

export default InputComponent; //Exporta a função
