import React from 'react';
import './FormStyles.css';

const UserRegistrationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = {
      name: formData.get('nome'),
      email: formData.get('email'),
      password: formData.get('senha'),
    };

    console.log(user);
    // Process the user data (e.g., send it to a server)
  };

  return (
    <div>
      <h1>Cadastro de Usuários</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required />

        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
};

export default UserRegistrationForm;
