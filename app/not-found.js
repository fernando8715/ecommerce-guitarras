import Link from 'next/link'

// verificar como configurar y adaptar la pagina de error 404 al proyecto

export default function Page404() {
  return (
    <div>
      <h2 className='heading'>Page Not Found</h2>
      <p className='error'>Could not find requested resource</p>
      <Link href="/" className='error_enlace'>Return Home</Link>
    </div>
  )
}