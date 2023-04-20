import React, { useState, useEffect } from 'react'
import './ListaTemas.css'
import { Box, Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'
import useLocalStorage from 'react-use-localstorage'
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service'


function ListaTemas() {
    const [temas, setTemas] = useState<Tema[]>([])
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])


    async function getTema() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }


    useEffect(() => {
        getTema()
    }, [temas.length])

    return (
        <>
            {
                temas.map(tema => (
                    <Grid container direction={'row'}>
                        <Box m={2} >
                            <Card variant="elevation" elevation={10} className='bordaCard'>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        Tema
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        {tema.descricao}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Box display="flex" justifyContent="center" mb={1.5} >

                                        <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                            <Box mx={1}>
                                                <Button variant="contained" size='small' className="botaoAtualizar" >
                                                    atualizar
                                                </Button>
                                            </Box>
                                        </Link>
                                        <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                            <Box mx={1}>
                                                <Button variant="contained" size='small' className='botaoDeletar'>
                                                    deletar
                                                </Button>
                                            </Box>
                                        </Link>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                ))
            }
        </>
    )
}

export default ListaTemas