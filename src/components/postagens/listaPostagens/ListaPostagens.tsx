import React, { useEffect, useState } from 'react'
import './ListaPostagens.css'
import { Box, Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { busca } from '../../../services/Service'
import Postagem from '../../../models/Postagens'
import useLocalStorage from 'react-use-localstorage'

function ListaPostagem() {
    const [posts, setPosts] = useState<Postagem[]>([])
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    async function getPost() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])
    return (
        <>
            {posts.length === 0 && (<div className="lds-ring centro"><div></div><div></div><div></div></div>)}
            {
                posts.map(post => (
                    <Grid container direction={'column'}>
                        <Box m={2}>
                            <Card variant="elevation" elevation={10} className='bordaCard'>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom className='Postagens'>
                                        Postagens
                                    </Typography>
                                    <Typography variant="h5" component="h2" className='tituloPostagen'>
                                        {post.titulo}
                                    </Typography>
                                    <Typography variant="body2" component="p" className='textoPostagem'>
                                        {post.texto}
                                    </Typography>

                                    <Typography variant="body2" component="p" className='temaLabel'>
                                        {post.tema?.descricao}
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Box display="flex" justifyContent="center" mb={1.5} >

                                        <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                            <Box mx={1}>
                                                <Button variant="contained" size='small' className="botaoAtualizar">
                                                    atualizar
                                                </Button>
                                            </Box>
                                        </Link>
                                        <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
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

export default ListaPostagem