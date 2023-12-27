export async function getData() {
    const respuesta = await fetch(`${process.env.API_URL}/api/guitarras?populate=image`, { cache: 'no-store' });
  
    if(!respuesta.ok){
      throw new Error('fallo el fetch data')
    }
  
    return respuesta.json()
  }