import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Front End Challenge - Gabriel Lovera</h1>
      <button>
        <Link href={'/log-in'}>Ingresar
        </Link>
        </button>
    </main>
  )
}
