import React from 'react'
import './SobreProjeto.css'
import { Box, Grid, Typography } from '@mui/material';

function Sobre() {
  return (
    <>
        <Grid container className='conteudoSobre' xs={12} md={12}>
            <Box paddingX={5}>
                <Typography className='tituloSobre'>BlogPessoal: Compartilhando Conhecimento e Fazendo Perguntas</Typography>

                <img src="https://ik.imagekit.io/sammylexa/Ilustra%C3%A7%C3%B5es_do_blog/Front-End__1_.png?updatedAt=1681773842486" alt="Logo do BlogPessoal" />
                <Typography className='descricaoSobre'>Este projeto tem como objetivo criar um blog para indivíduos interessados ​​em Desenvolvimento Front-End compartilharem seus conhecimentos, fazerem perguntas e colaborarem com outros indivíduos com interesses semelhantes. O desenvolvimento front-end é um aspecto essencial da construção de qualquer site, aplicativo ou software. O blog servirá como uma plataforma para desenvolvedores, designers e entusiastas aprenderem, compartilharem e desenvolverem suas habilidades.</Typography>
            
                <Typography className='descricaoSobre'>
                O blog abordará vários tópicos relacionados ao desenvolvimento front-end, incluindo HTML, CSS, JavaScript, estruturas, bibliotecas, design UI/UX, acessibilidade e design responsivo. O blog também terá tutoriais, estudos de caso e práticas recomendadas para ajudar as pessoas a melhorar suas habilidades e se manterem atualizadas com as últimas tendências e tecnologias em Desenvolvimento Front-End.
                </Typography>
            </Box>
        </Grid>
    </>
  )
}

export default Sobre