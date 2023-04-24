import React, { ChangeEvent, useEffect, useState } from 'react'
import './cadastroTema.css'
import { Container, Typography, TextField, Button } from '@mui/material'
import Tema from '../../../models/Tema';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, post, put } from '../../../services/Service';

function cadastroTema() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    /* 
    ! Essa linha de codigo verifca se o user está logado, 
    ! caso contrario o redireciona pro login
    ! a lógica verica se o token está preenchido para 
    ! dizer se está com token ou sem
    */

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })

    }
    
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            put(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema atualizado com sucesso');
        } else {
            post(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema cadastrado com sucesso');
        }
        back()
    }

    function back() {
        navigate('/temas')
    }


    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}


export default cadastroTema


