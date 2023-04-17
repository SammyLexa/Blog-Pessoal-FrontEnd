import React from 'react'
import './Login.css'
import { Grid } from '@material-ui/core';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

function Login() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={12} md={6} alignItems='center'>
                <Box paddingX={{ xs:6, md:20}} paddingY={{xs:10}}>
                    <form>
                        <Typography variant='h3' gutterBottom style={{color:"var(--cor-principal)", fontWeight:"700"}} component={"h3"} align='center'  >Entrar</Typography>
                        <TextField id="usuario" label="usuario" variant='outlined' name='usuario' margin='normal' fullWidth/>
                        <TextField id="senha" label="senha" variant='outlined' name='senha' type='password' margin='normal' fullWidth/>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' className="botaoLogin">Logar</Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display="flex" justifyContent={"center"} marginTop={2}>
                        <Box>
                            <Typography variant='subtitle1' gutterBottom align='center' >Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' className="textos"><Link to='/home' className='link'>Cadastre-se</Link></Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={12} md={6} className='imagemLogin'>

            </Grid>
        </Grid>
    );
}

export default Login;