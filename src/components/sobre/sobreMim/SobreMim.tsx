import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import './SobreMim.css'

function SobreMim() {
  return (
    <>
    <Grid container justifyContent={'center'} textAlign={'center'}>
      <Grid  xs={12} md={6} direction={'row'}>
        <img className='imagemSM' src="https://ik.imagekit.io/sammylexa/Ilustra%C3%A7%C3%B5es_do_blog/Design_sem_nome__3_.png?updatedAt=1681875809204" alt="imagem de Samantha" />
      </Grid>
      <Grid item xs={12} md={6} direction={'column'}  paddingX={6}>
        <Typography className='tituloSM'>Samantha Alexandra Pereira</Typography>
        <Typography className='textoSM'>Sou aspirante a Desenvolvedora Web Full-Stack, estou ansiosa para aprender e crescer na área de desenvolvimento web. Minha paixão por criar páginas web úteis, envolventes, acessíveis e fáceis de usar me levou a seguir a carreira de desenvolvimento.</Typography>
        <Typography className='textoSM'>Embora eu seja nova no área, concluí cursos de HTML, CSS, JavaScript, Java e também ganhei experiência trabalhando em projetos pessoais para aprimorar minhas habilidades. Estou familiarizada com os framework React, Spring e Insomnia, e me sinto confortável trabalhando com várias ferramentas de desenvolvimento, como Git, VSCode, STS ou Eclipse.</Typography>
        <Typography className='textoSM'>Estou animada para contribuir com minhas habilidades e aprender com desenvolvedores experientes para criar aplicativos da Web de ponta. Possuo um perfil com disposição para o aprendizado e aprimoramento contínuos que me permite aprender novas tecnologias com facilidade e velocidade.</Typography>
        <Typography className='textoSM'>Entendo que esta profissão requer um alto nível de adaptabilidade e habilidades de resolução de problemas, e estou confiante em minhas capacidades. Não tenho medo de fazer perguntas ou buscar ajuda quando necessário e estou empenhada em me manter atualizada com as últimas tendências e melhores práticas para ser uma desenvolvedora bem-sucedida e de excelência.</Typography>
      </Grid>
    </Grid>
    </>
  )
}

export default SobreMim