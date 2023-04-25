import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, renderMatches } from 'react-router-dom';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { useDispatch } from "react-redux";

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        alert('Usuário deslogado')
        navigate('/login')
    }

    var navbarComponent;

    if(token !== ''){
        navbarComponent = <AppBar position="static">
        <Toolbar variant="dense" className="navbar" >
            <Box className="cursor" >
                <Typography variant="h5" color="inherit">
                    BlogPessoal
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">

                <Box mx={1} >
                    <Link to='/home' className='text-decorator-none cursor' >
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Link>
                </Box>

                <Box mx={1}>
                    <Link to='/postagens' className='cursor text-decorator-none'>
                        <Typography variant="h6" color="inherit">
                            Postagens
                        </Typography>
                    </Link>
                </Box>
                <Box mx={1}>
                    <Link to='/temas' className='cursor text-decorator-none'>
                        <Typography variant="h6" color="inherit">
                            Temas
                        </Typography>
                    </Link>
                </Box>

                <Box mx={1} >
                    <Link to='/formularioTema' className='cursor text-decorator-none'>
                        <Typography variant="h6" color="inherit">
                            Cadastrar tema
                        </Typography>
                    </Link>
                </Box>

                <Box mx={1} >
                    <Link to='/formularioPostagem' className='cursor text-decorator-none'>
                        <Typography variant="h6" color="inherit">
                            Cadastrar Postagem
                        </Typography>
                    </Link>
                </Box>
                <Box mx={1} onClick={goLogout} className='cursor text-decorator-none'>

                    <Typography variant="h6" color="inherit">
                        Logout
                    </Typography>

                </Box>


            </Box>

        </Toolbar>
    </AppBar >
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;

