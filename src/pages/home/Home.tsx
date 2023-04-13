import './home.css'
import 'react'
import {Paper} from '@material-ui/core';
import Box from '@mui/material/Box';
import { Button, Grid, Typography } from '@mui/material';

function Home(){
    return(
        <>
            <Grid  container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "background: rgb(255,158,0)", background: "linear-gradient(180deg, rgba(255,158,0,1) 8%, rgba(255,178,53,1) 48%, rgba(255,208,81,1) 78%)" }}>
                <Grid alignItems="center" item xs={12} md={6}>
                    <Box paddingX={{ xs:6, md:20}} paddingY={{xs:10}}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos, dúvidas e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "var(--cor-destaque)", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="https://ik.imagekit.io/sammylexa/Ilustra%C3%A7%C3%B5es_do_blog/blog-ilustracao.svg?updatedAt=1681314047403" alt="Imagem da Tela Inicial, uma mulher digitando no computador" className='ilustracaoHome' />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;