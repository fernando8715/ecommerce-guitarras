import styles from '../styles/curso.module.css'


export default function Curso({ curso }) {

    const { title, description, image } = curso;

    return (
        <section className={`${styles.curso} ${styles.hero}`}>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className="heading">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    )
}
