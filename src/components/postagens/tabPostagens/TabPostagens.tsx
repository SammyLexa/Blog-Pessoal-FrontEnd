import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import './TabPostagens.css'
import ListaPostagens from '../listaPostagens/ListaPostagens';
import ListaTemas from '../../temas/listaTemas/ListaTemas';
import Sobre from '../../sobre/SobreProjeto';
import SobreMim from '../../sobre/sobreMim/SobreMim';
import { Grid } from '@mui/material';



function TabPostagens() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  // TabIndicatorProps={{style: {display: 'none'}}}
  return (
    <>
      <Grid>
        <TabContext value={value}>
          <AppBar position="static" className='tabBarra'>
            <TabList onChange={handleChange} aria-label="simple tabs example" className='barra'>
              <Tab label="Postagens" value="1" />
              <Tab label="Sobre o Projeto" value="2" />
              <Tab label="Sobre mim" value="3" />
            </TabList>
          </AppBar>
          <TabPanel value="1"><ListaPostagens /></TabPanel>
          <TabPanel value="2"><Sobre /></TabPanel>
          <TabPanel value="3"><SobreMim /></TabPanel>
        </TabContext>
      </Grid>
    </>
  )
}

export default TabPostagens


