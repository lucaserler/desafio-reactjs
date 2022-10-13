import React, { useState } from "react";

import Header from "../../components/Header/header";
import Footer from "../../components/Fooder/footer";
import AxiosInstance from "../../API/axiosInstance";
import * as yup from 'yup';
import "./cadastro.css";

function Cadastro() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const postData = () => {
    AxiosInstance.post(`/api/users`, { usuario, senha })
    .then((response) => { alert(response.data.msg); })
};

  return (
    <>
    <Header/>
      
      <div className="cadastro">
       <h1>Cadastro de Usuáio</h1> 
        <div className="form-cadastro">
          <div>
            <label>Digite um usuário para cadastro</label>
            <input onChange={(e) => setUsuario(e.target.value)} type="text" />
          </div>
          <div>
            <label>Digite uma senha para cadastro</label>
            <input onChange={(e) => setSenha(e.target.value)} type="password" />
          </div>
          <div>
            <label>Confirme a senha</label>
            <input type="password" autocomplete="current-password" id="current-password" />
          </div>
        </div>
        <a className="button-cadastro" onClick={postData} >Salvar </a>
        <Footer/>
      </div>
    </>
  );
}

export default Cadastro;
