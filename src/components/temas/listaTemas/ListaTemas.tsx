import React from 'react'
import './ListaTemas.css'
import { Box, Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

function ListaTemas() {
    return (
        <Grid container direction={'row'}>
            <Box m={2} >
                <Card variant="elevation" elevation={10} className='bordaCard'>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Tema
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Minha descrição
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5} >

                            <Link to="" className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" size='small' className="botaoAtualizar" >
                                        atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to="" className="text-decorator-none">
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
    )
}

export default ListaTemas