import styles from '../styles/grid.module.css'
import Guitarra from '../components/guitarra';

export const metadata = {
  title: 'GuitarLA - Tienda',
  description: 'Espacio donde encontraras todas las guitarras que tenemos disponibles',
}

export default async function Tienda() {

  const respuesta = await fetch(`${process.env.API_URL}/api/guitarras?populate=image`, { cache: 'no-store' });
  const { data: guitarras } = await respuesta.json();
  console.log(guitarras);

  return (
    <>
      <main className={`contenedor`}>
        <h2 className={`heading`}>Nuestra colección</h2>
        <div className={styles.grid}>
          {guitarras.map(guitarra => (
            <Guitarra
              key={guitarra?.id}
              guitarra={guitarra?.attributes}
            />
          ))}
        </div>
      </main>
    </>
  )
}

