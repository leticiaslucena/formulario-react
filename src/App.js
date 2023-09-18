import React from 'react';
import { Component } from 'react';
import './App.css';
import FormularioCadastro from './componentes/FormularioCadastro';

import 'fontsource-roboto'
import { Container, Typography } from '@mui/material';
import { validarCpf, validarSenha } from './modelos/cadastros';
import ValidacaoCadastro from './componentes/ValidacoaCadastro'
class App extends Component {

  render() {
    return (
      <Container component='article' maxWidth="sm">

        <Typography variant='h3' component='h1' align='center'>
            Formulário de Cadastro React
        </Typography>

        <ValidacaoCadastro.Provider
          value={{cpf:validarCpf, senha:validarSenha, nome:validarSenha}}
        >
          <FormularioCadastro aoEnviar={aoEnviarFormulario}/>
        </ValidacaoCadastro.Provider>
      </Container>

    );

  }
}
function aoEnviarFormulario(dados) {
  console.log(dados);
}

export default App;
