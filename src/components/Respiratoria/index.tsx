import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Respirador from '../../assets/images/respirador.jpg';
import RespiradorSemValvula from '../../assets/images/respirador-sem-valvula.jpg';

export function Respiratoria() {
  return (
    <>
      <Grid item xs={11} sm={6} md={3}>
        <Card sx={{ maxWidth: 345, maxHeight: '420px' }}>
          <CardMedia
            component='img'
            height='300'
            image={Respirador}
            alt='respirador pff2'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Respirador PFF2 com Válvula
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={11} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            height='300'
            image={RespiradorSemValvula}
            alt='respirador pff2'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Respirador PFF2 sem Válvula
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <p>CA válido até 2024</p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
