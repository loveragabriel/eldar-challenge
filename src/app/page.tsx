import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { Container, Typography, Button} from '@mui/material'

export default function Home() {
  return (
    <Container sx={{height:'100vh',}}>
      <Typography variant='h4' component="h1" sx={{fontSize: {
        xs:'1.5rem', 
        sm:'2.5rem'
      }}} >Front End Challenge </Typography >
      <Typography variant='h6'>Gabriel Lovera</Typography>
      <Button variant='contained' sx={{padding:'10px'}} >
        <Link href={'/log-in'}>Ingresar
        </Link>
        </Button>
    </Container>
  )
}
