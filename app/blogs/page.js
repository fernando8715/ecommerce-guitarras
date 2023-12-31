import { getDataStatic } from '../helpers/getData'
import styles from '../styles/grid.module.css'
import Blog from '../components/blog' 

export const metadata = {
  title: 'GuitarLA - Blog',
  description: 'información de interes para los amantes y aficionados a las guitarras',
}


export default async function Blogs() {

  const url = `${process.env.API_URL}/api/blogs?populate=image`
  const {data: blogs} = await getDataStatic(url)

  return (
    <main>
      <h1 className='heading'>Blogs</h1>
      <div className={styles.grid}>
        {blogs?.map(blog=>(
          <Blog 
            key={blog.id}
            blog={blog.attributes}
          />
        ))}
      </div>
    </main>
  )
}
