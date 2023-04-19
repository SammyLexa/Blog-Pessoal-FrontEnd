import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static">
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
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>

                        <Box mx={1}>
                            <Link to='/login' className='cursor text-decorator-none' >
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Link>
                        </Box>


                    </Box>

                </Toolbar>
            </AppBar >
        </>
    )
}

export default Navbar;

