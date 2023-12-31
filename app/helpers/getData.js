import { notFound } from "next/navigation";

export async function getDataDinamic() {
    const respuesta = await fetch(`${process.env.API_URL}/api/guitarras?populate=image`, { cache: 'no-store' });
  
    if(!respuesta.ok){
      return notFound()
    }
  
    return respuesta.json()
  }

export async function getDataStatic(url){
  const res = await fetch(url);

  if(!res.ok){
    return notFound();
  }

  return res.json();
}