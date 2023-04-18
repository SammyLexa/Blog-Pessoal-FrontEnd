import { Grid, Box, Typography, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './CadastroUsuario.css'

import React from 'react'

function CadastroUsuario() {
    return (
        <>
            <Grid container direction="row" justifyContent='center' alignItems='center' className='containerCadastro'>
                <Grid xs={12} md={6} className='imagemCadastro'>

                </Grid>
                <Grid xs={12} md={6} alignItems='center' direction="row">
                    <Box paddingX={{ xs: 6, md: 10 }} paddingY={{ xs: 5 }} >
                        <form>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastre-se</Typography>

                            <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />

                            <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />

                            <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

                            <TextField id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                            
                            <TextField id='foto' label='foto' variant='outlined' name='foto' margin='normal' fullWidth />
                            <Typography className='subtitulo'>*Coloque apenas o link nesse campo</Typography>
                            <Box marginTop={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='contained' className="botaoCancelar">Cancelar</Button>
                                </Link>

                                <Link to='/home' className='text-decorator-none'>
                                    <Button type='submit' variant='contained' className="botaoCadastro">Logar</Button>
                                </Link>
                            </Box>

                        </form>
                        <Box display="flex" justifyContent={"center"} marginTop={2}>
                            <Box>
                                <Typography variant='subtitle1' gutterBottom align='center' >Já tem uma conta?</Typography>
                            </Box>
                            <Typography variant='subtitle1' gutterBottom align='center' className="textos" marginX={"1rem"}>
                                <Link to='/login' className='linkCadastro'>
                                    Logar
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default CadastroUsuario