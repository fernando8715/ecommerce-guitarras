import Link from 'next/link'

// verificar como configurar y adaptar la pagina de error 404 al proyecto

export default function NotFound() {
  return (
    <div>
      <h2 className='heading'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}