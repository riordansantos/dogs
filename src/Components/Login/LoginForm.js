import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Input from "../Form/Input";
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const username = useForm('email');
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);


  function handleSubmit(event) {

    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="userName" {...username}/>
        <Input label="Senha" type="password" name="password" {...password}/>
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
