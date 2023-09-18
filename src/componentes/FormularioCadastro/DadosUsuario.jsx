import { TextField, Button, } from "@mui/material";
import React, { useState, useContext } from "react";

import ValidacaoCadastro from "../ValidacoaCadastro";
import useErros from "../hooks/useErros";

function DadosUsuario({ aoEnviar}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const validacao = useContext(ValidacaoCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacao);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) { //impedi que se senha estiver errada ele não passa pra proxima tela
                aoEnviar({ email, senha });
            }
        }}>
            <TextField
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
                id="email"
                name="email"
                label='email'
                type="email"
                required
                variant="outlined"
                margin='normal'
                fullWidth
            />
            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha"
                name="senha"
                label="senha"
                type="password"
                required
                variant="outlined"
                margin='normal'
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    )
}

export default DadosUsuario;