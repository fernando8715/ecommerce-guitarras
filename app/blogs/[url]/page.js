import Image from "next/image";
import { formatoFecha } from '../../helpers/formatearDatos'
import styles from '../../styles/blog.module.css'
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {

  const { data } = await fetch(`${process.env.API_URL}/api/blogs?filters[url]=${params.url}&populate=image`).then(res => res.json());
  if (data.length === 0) {
    return notFound()
  } else {
    const { title, description } = data[0].attributes;
    return {
      title: `GuitarLa - ${title}`,
      description: description
    }
  }
}


export default async function PageBlog({ params }) {
  const respuesta = await fetch(`${process.env.API_URL}/api/blogs?filters[url]=${params.url}&populate=image`)
  const { data: blog } = await respuesta.json();

  if (blog.length === 0) {
    return notFound()
  } else {
    const { title, publishedAt, description, image } = blog[0].attributes;

    return (
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image
          src={image.data.attributes.url}
          width={1000}
          height={400}
          alt={`Imagen de ${title}`}
        />
        <div className={styles.contenido}>
          <h3>{title}</h3>
          <p className={styles.fecha}>{formatoFecha(publishedAt)}</p>
          <p className={styles.texto}>{description}</p>
        </div>
      </article>
    )
  }
}