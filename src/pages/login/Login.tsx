import React, { ChangeEvent, useState, useEffect } from 'react'

import './Login.css'
import { Grid } from '@material-ui/core';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';

function Login() {

    let history = useNavigate();

    const [token, setToken] = useLocalStorage('token');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: "",
            senha: '',
            foto: "",
            token: ""
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token !== '') {
            history('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login('/usuarios/logar', userLogin, setToken)

            alert('Usuário logado com sucesso!')
        } catch (error) {
            alert('Dados do Usuário inconsistentes. Erro ao logar!')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={12} md={6} alignItems='center'>
                <Box paddingX={{ xs: 6, md: 20 }} paddingY={{ xs: 10 }}>
                    <form onSubmit={onSubmit}>

                        <Typography variant='h3' gutterBottom style={{ color: "var(--cor-principal)", fontWeight: "700" }} component={"h3"} align='center'  >Entrar</Typography>
                        <TextField value={userLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario" label="usuario" variant='outlined' name='usuario' margin='normal' fullWidth
                        />

                        <TextField value={userLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha" label="senha" variant='outlined' name='senha' type='password' margin='normal' fullWidth
                        />

                        <Box marginTop={2} textAlign='center'>

                            <Button type='submit' variant='contained' className="botaoLogin">Logar</Button>

                        </Box>
                    </form>
                    <Box display="flex" justifyContent={"center"} marginTop={2}>
                        <Box>
                            <Typography variant='subtitle1' gutterBottom align='center' >Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' className="textos" marginX={"1rem"}>
                            <Link to='/cadastrousuario' className='link'>
                                Cadastre-se
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={12} md={6} className='imagemLogin'>

            </Grid>
        </Grid>
    );
}

export default Login;
