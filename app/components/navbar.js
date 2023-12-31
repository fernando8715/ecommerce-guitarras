'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from '../styles/header.module.css'

export default function Navbar() {

    const path = usePathname();

    return (
        <nav className={styles.navigation}>
            <Link href={'/'} className={path === '/' ? styles.active : ''}>Inicio</Link>
            <Link href={'/nosotros'} className={path === '/nosotros' ? styles.active : ''}>Nosotros</Link>
            <Link href={'/tienda'} className={path === '/tienda' ? styles.active : ''}>Tienda</Link>
            <Link href={'/blogs'} className={path === '/blogs' ? styles.active : ''}>Blog</Link>
            <Link href={'/'} >
                <div className={styles.imgCarrito}>
                    <Image
                        src='/img/carrito.png'
                        width={30}
                        height={25}
                        alt='imagen carrito de compras'
                    />
                </div>
            </Link>
        </nav>
    )
}
