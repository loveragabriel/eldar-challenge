import Link from 'next/link';
import { Container, Typography, Button } from '@mui/material';
import { containerStyles, titleStyles, buttonStyles } from '@/app/styles';
import Image from 'next/image';
import eldar_logo from '../../public/eldar_logo.png'

export default function Home() {
  return (
    <Container sx={containerStyles}>
      <Image src={eldar_logo} alt='Logo Eldar Srl' width={200} height={200}/>
      <Typography variant='h4' component="h1" sx={titleStyles}>
        Front End Challenge
      </Typography>
      <Link href={'/log-in'}>
        <Button variant='contained' sx={buttonStyles}>
          Ingresar
        </Button>
      </Link>
    </Container>
  );
}
