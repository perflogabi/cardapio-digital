import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MopedIcon from '@mui/icons-material/Moped';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent >
      <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems:'center', gap:'0.5rem', color: 'orange', fontSize: '18px' }}>
        <MopedIcon /> Entregas
      </Typography>
     
      <Typography variant="body2" sx={{ fontSize:'14px'}}>
        30 pedidos sairam para entrega
        <br />
        
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Saiba Mais</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 175, width: '15rem', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
    borderRadius: '8px',
    background: '#fff', }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
