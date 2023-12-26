import Navbar from "./navbar"
import Link from "next/link"
import styles from '../styles/header.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenido}>
        <nav className={styles.navigation}>
          <Link href={'/'} >Inicio</Link>
          <Link href={'/nosotros'} >Nosotros</Link>
          <Link href={'/tienda'} >Tienda</Link>
          <Link href={'/blog'} >Blog</Link>
        </nav>
        <p>Todos los derechos reservados (2022)</p>
      </div>
    </footer>
  )
}

