import { notFound } from "next/navigation";

export async function getDataDinamic() {
    const respuesta = await fetch(`${process.env.API_URL}/api/guitarras?populate=image`, { cache: 'no-store' });
  
    if(!respuesta.ok){
      return notFound()
    }
  
    return respuesta.json()
  }

