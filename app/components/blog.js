import Image from "next/image"
import Link from "next/link"
import { formatoFecha } from '../helpers/formatearDatos'
import styles from '../styles/blog.module.css'

export default function Blog({ blog }) {

    const { title, description, publishedAt, image, url } = blog

    return (
        <article>
            <Image
                src={image.data.attributes.formats.medium.url}
                width={600}
                height={400}
                alt={`Imagen ${title}`}
            />
            <div className={styles.contenido}>
                <h2>{title}</h2>
                <p className={styles.fecha}>{formatoFecha(publishedAt)}</p>
                <p className={styles.resumen}>{description}</p>
                <Link href={`/blogs/${url}`} className={styles.enlace}>Leer blog</Link>
            </div>
        </article>

    )
}
