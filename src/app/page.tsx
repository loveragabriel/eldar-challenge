import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'

export default function Home() {
  return (
    <Container>
      <Typography variant='h4' component="h1" >Front End Challenge - Gabriel Lovera</Typography >
      <button>
        <Link href={'/log-in'}>Ingresar
        </Link>
        </button>
    </Container>
  )
}
