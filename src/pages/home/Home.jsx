import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Aceitos from '../../components/sidebar/topCards/Aceitos'
import Producao from '../../components/sidebar/topCards/Producao'
import Prontos from '../../components/sidebar/topCards/Prontos'
import Entregues from '../../components/sidebar/topCards/Entregue'
import Grid from '@mui/material/Grid';

import TopCards from '../../components/sidebar/topCards/TopCards'

export const Home = () => {
  return (
    <div style={{ margin: '0 10px 0 7rem'}}>
        <Sidebar />
            
        <div style={{ width: '70rem'}}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={3}> {/* Ocupa 3/12 da largura em telas pequenas e maiores */}
                <Aceitos />
                </Grid>
                <Grid item xs={12} sm={3}>
                <Producao />
                </Grid>
                <Grid item xs={12} sm={3}>
                <Prontos />
                </Grid>
                <Grid item xs={12} sm={3}>
                <Entregues />
                </Grid>
            </Grid>
        </div>
        
    </div>
  )
}
