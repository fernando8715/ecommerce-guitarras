'use client'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/header.module.css';
import Navbar from './navbar';


export const Header = () => {

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <div className={styles.logo}>

          <Link href={'/'}>
            <Image
              src='/img/logo.svg'
              width={300}
              height={40}
              alt='Imagen del logo de la tienda de GuitarLa'
            />
          </Link>

        </div>

        <Navbar />

      </div>
    </header>
  )
}

