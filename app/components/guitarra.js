import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/guitarras.module.css'


export default function Guitarra({ guitarra }) {

    const { nombre, description, precio, image, url } = guitarra;

    return (
        <div className={styles.guitarra}>
                <Image
                    src={image.data.attributes.formats.medium.url}
                    width={300}
                    height={400}
                    alt={`Imagen de guitarra ${nombre}`}
                />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{description}</p>
                <strong className={styles.precio}>${precio}</strong>
                <Link
                    href={`/tienda/${url}`}
                    className={styles.enlace}                
                >Ver producto
                </Link>
            </div>
        </div>
    )
}
