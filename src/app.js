import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>Cadastro de Usuários</h1>
      <form>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
