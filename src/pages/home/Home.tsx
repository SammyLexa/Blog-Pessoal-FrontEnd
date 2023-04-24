import './Home.css'
import 'react'
import { Paper } from '@material-ui/core';
import Box from '@mui/material/Box';
import { Button, Grid, Typography } from '@mui/material';
import TabPostagens from '../../components/postagens/tabPostagens/TabPostagens';
import { Link } from 'react-router-dom'
import ModalPostagem from '../../components/postagens/modalPost/ModalPostagem';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={12} md={6}>
                    <Box paddingX={{ xs: 6, md: 20 }} paddingY={{ xs: 10 }}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo" >Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">expresse aqui os seus pensamentos, dúvidas e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">

                        <Box marginRight={1}>
                            <ModalPostagem  />
                        </Box>
                        <Link to='/postagens'>
                            <Button variant="outlined" className='botaoHome'>
                                Ver Postagens
                            </Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="https://ik.imagekit.io/sammylexa/Ilustra%C3%A7%C3%B5es_do_blog/blog-ilustracao.svg?updatedAt=1681314047403" alt="Imagem da Tela Inicial, uma mulher digitando no computador" className='ilustracaoHome' />
                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagens />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;