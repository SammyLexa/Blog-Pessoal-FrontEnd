import React from 'react'
import './Login.css'
import { Grid } from '@material-ui/core';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
                                <Button type='submit' variant='contained' className='botaoLogin' style={{backgroundColor:"var(--cor-principal)", color:"black"}}>Logar</Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display="flex" justifyContent={"center"} marginTop={2}>
                        <Box>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight:"bold"}}>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={12} md={6} style={{backgroundImage:'url(https://ik.imagekit.io/sammylexa/Ilustra%C3%A7%C3%B5es_do_blog/desk-g3d54fe341_1920.jpg?updatedAt=1681426924959)',
            backgroundRepeat:"no-repeat", width:'100vh', minHeight:'100vh', backgroundPosition:"center", backgroundSize:"cover"
        }}>

            </Grid>
        </Grid>
    );
}

export default Login;