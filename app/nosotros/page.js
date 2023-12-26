import Image from 'next/image'
import styles from '../styles/nosotros.module.css'


export const metadata = {
    title: 'GuitarLA - Nosotros',
    description: 'descripcion de la tienda de guitarras, blog y cursos disponibles',
}

export default function Nosotros() {
    return (
        <>
            <main className={`contenedor`}>
                <h2 className={`heading`}>Nosotros</h2>
                <div className={styles.nosotros}>
                    <Image
                        src='/img/nosotros.jpg'
                        alt='imagen de una guitarra electrica'
                        width={600}
                        height={400}
                    />
                    <div className={styles.contenido}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend facilisis mattis. Aliquam erat volutpat. In bibendum urna vitae fermentum lacinia. Praesent dapibus iaculis odio eu vulputate. Vivamus convallis gravida sapien, ac viverra dolor convallis eget. Mauris semper accumsan feugiat. Ut sit amet ex enim. Curabitur id finibus augue. Aliquam erat volutpat.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend facilisis mattis. Aliquam erat volutpat. In bibendum urna vitae fermentum lacinia. Praesent dapibus iaculis odio eu vulputate. Vivamus convallis gravida sapien, ac viverra dolor convallis eget. Mauris semper accumsan feugiat. Ut sit amet ex enim. Curabitur id finibus augue. Aliquam erat volutpat.</p>
                    </div>
                </div >
            </main>
        </>
    )
}
