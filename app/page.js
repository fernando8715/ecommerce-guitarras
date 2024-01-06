import Blog from "./components/blog"
import Curso from "./components/curso"
import Guitarra from "./components/guitarra"
import styles from './styles/grid.module.css'
// import stylesCurso from './styles/curso.module.css'

export const metadata = {
  title: 'GuitarLA - Inicio',
}

export default async function Home() {

  const urlGuitarras = `${process.env.API_URL}/api/guitarras?populate=image`
  const urlBlogs = `${process.env.API_URL}/api/blogs?populate=image`
  const urlCurso = `${process.env.API_URL}/api/curso?populate=image`


  const [respGuitarras, respBlogs, respCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlBlogs),
    fetch(urlCurso)
  ])

  const [{ data: guitarras }, { data: blogs }, { data: curso }] = await Promise.all([
    respGuitarras.json(),
    respBlogs.json(),
    respCurso.json()
  ])

  return (
    <>
      <main className={`contenedor`}>
        <h1 className={`heading`}>Nuestra colección</h1>
        <div className={styles.grid}>
          {guitarras.map(guitarra => (
            <Guitarra
              key={guitarra?.id}
              guitarra={guitarra?.attributes}
            />
          ))}
        </div>
      </main>

      <section>
        <Curso curso={curso?.attributes}/>
      </section>

      <section className="contenedor">
        <h2 className='heading'>Blogs</h2>
        <div className={styles.grid}>
          {blogs?.map(blog => (
            <Blog
              key={blog.id}
              blog={blog.attributes}
            />
          ))}
        </div>
      </section>


    </>
  )
}
