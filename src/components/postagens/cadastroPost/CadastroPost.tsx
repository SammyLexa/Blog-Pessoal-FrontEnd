import { Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button, Grid } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Postagem from '../../../models/Postagens';
import Tema from '../../../models/Tema';
import { busca, buscaId, put, post } from '../../../services/Service';
import './CadastroPost.css'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import User from '../../../models/User';


function CadastroPost() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    /* const userId = useSelector<TokenState, TokenState['id']>(
         (state) => state.id
     )

 const [usuario, setUsuario] = useState<User>({
     id: +userId,
     nome: '',
     usuario: '',
     senha: '',
     foto: ''
 }) */

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            descricao: ''
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null,
        data: '',
        /*usuario: null*/
    })

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
            // usuario: usuario
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem atualizada com sucesso');
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem cadastrada com sucesso');
        }
        back()

    }

    function back() {
        navigate('/postagens')
    }

    return (
        <Grid marginTop={12} >
            <Container maxWidth="sm" className="topo">

                <form onSubmit={onSubmit}>
                    <Typography variant="h3" color="textSecondary" component="h1" align="center" >{postagem.id !== 0 ? 'Editar postagem' : 'Cadastrar postagem'}</Typography>
                    <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                    <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                    <FormControl >
                        <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                                headers: {
                                    'Authorization': token
                                }
                            })}>
                            {
                                temas.map(tema => (
                                    <MenuItem className='temaLabel' value={tema.id}>{tema.descricao}</MenuItem>
                                ))
                            }
                        </Select>
                        <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                        <Button type="submit" variant="contained" className='botao'>
                            Finalizar
                        </Button>
                    </FormControl>
                </form>
            </Container>
        </Grid>
    )
}
export default CadastroPost;

