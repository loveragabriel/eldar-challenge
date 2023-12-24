import Link from 'next/link'
import { Container, Typography, Button } from '@mui/material'

export default function Home() {
  return (
    <Container sx={{ height: '100vh', textAlign: 'center', marginTop: '15vh' }}>
      <Typography variant='h4' component="h1" sx={{
        fontSize: {
          xs: '1.5rem',
          sm: '2.5rem'
        }
      }} >Front End Challenge </Typography >
      <Link href={'/log-in'}>
        <Button variant='contained' sx={{
          padding: {
            xs: '5px',
            sm: '10px'
          }, fontSize: {
            xs: '.7rem',
            sm: '1.2rem'
          }
        }} >
          Ingresar
        </Button>
      </Link>
    </Container>
  )
}
