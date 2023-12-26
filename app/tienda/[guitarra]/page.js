import Image from "next/image";
import styles from '../../styles/guitarras.module.css'

export const metadata = {
  title: 'GuitarLA - ', //-------------------- crear el nombre de manera dinamica ----------------
  description: 'descripcion de la tienda de guitarras, blog y cursos disponibles',
}

export default async function Page({ params }) {

  const respuesta = await fetch(`${process.env.API_URL}/api/guitarras?filters[url]=${params.guitarra}&populate=image`)
  const { data: guitarra } = await respuesta.json();
  const { nombre, image, description, precio } = guitarra[0].attributes;

  return (
    <div className="contenedor">
      <div className={styles.guitarra}>
        <Image
          src={image.data.attributes.url}
          width={300}
          height={400}
          alt={`Imagen de guitarra ${nombre}`}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{description}</p>
          <strong className={styles.precio}>${precio}</strong>
        </div>
      </div>
    </div>
  )
}
