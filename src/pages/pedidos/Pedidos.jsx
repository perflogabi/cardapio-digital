import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import TabelaPedidos from '../pedidos/TabelaPedidos'
import Grid from '@mui/material/Grid';

export const Pedidos = () => {
  return (
   <div>
    <Sidebar/>
    <div sx={{flex: '6'}}>
      <TabelaPedidos/>
    </div>
   </div>
  )
}
