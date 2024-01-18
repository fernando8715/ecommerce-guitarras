import { notFound } from "next/navigation";
import GuitarraCarrito from "@/app/components/guitarraCarrito";


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

  const respuesta = await fetch(`${process.env.API_URL}/api/guitarras?filters[url]=${params.guitarra}&populate=image`, { cache: 'no-store' });
  const { data: guitarra } = await respuesta.json();
  if (guitarra.length === 0) {
    return notFound()
  }

  return (
    <div className="contenedor">
      <GuitarraCarrito
        guitarra={guitarra}
      />
    </div>
  )

}
