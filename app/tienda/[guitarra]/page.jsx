import Image from "next/image";
import styles from '../../styles/guitarras.module.css'
import { notFound } from "next/navigation";


export async function generateMetadata({ params }) {

  const { data } = await fetch(`${process.env.API_URL}/api/guitarras?filters[url]=${params.guitarra}`).then(res => res.json());
  if (data.length === 0) {
    return notFound()
  } else {
    const { nombre, description } = data[0].attributes;
    return {
      title: `GuitarLa - ${nombre}`,
      description: description
    }
  }
}


export default async function Page({ params }) {

  const respuesta = await fetch(`${process.env.API_URL}/api/guitarras?filters[url]=${params.guitarra}&populate=image`)
  const { data: guitarra } = await respuesta.json();
  if (guitarra.length === 0) {
    return notFound()
  } else {
    const { nombre, image, description, precio, publishedAt } = guitarra[0].attributes;

    return (
      <div className="contenedor">
        <div className={styles.guitarra}>
          <Image
            src={image?.data.attributes.url}
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
}
