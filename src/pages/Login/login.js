import React from "react";
import Form from "react-bootstrap/Form";

import Footer from "../../components/Fooder/footer";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <Form className="form-box">
        <Form.Group className="mb-5 mt-4" controlId="formBasicUsuario">
          <input className="input-login" type="text" placeholder="Seu usuário" />
        </Form.Group>

        <Form.Group className="mb-4 mt-1" controlId="formBasicPassword">
          <input className="input-login" type="password" placeholder="Sua senha" />
        </Form.Group>

        <a href=" " className="button-login" type="submit">Entrar</a>
      </Form>
      <Footer/>
    </div>
  );
}
export default Login;
