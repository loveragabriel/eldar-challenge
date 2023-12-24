import Link from 'next/link';
import { Container, Typography, Button } from '@mui/material';
import { containerStyles, titleStyles, buttonStyles } from '@/app/styles';

export default function Home() {
  return (
    <Container sx={containerStyles}>
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
