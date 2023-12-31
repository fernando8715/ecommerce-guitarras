import { Outfit } from 'next/font/google';
import './globals.css'; // global styles apply to every route
import './normalize.css'
import { Header, Footer } from './components'

const outfit = Outfit({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'GuitarLA',
  description: 'e-commerce de una tienda de guitarras utilizando herramientas HTML, CSS, JavaScript, React, Strapi, Next.js, Git y GitHub',
  icons: {
    icon: '/antal.svg',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
