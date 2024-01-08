'use client'

import { useEffect, useState } from "react";
import { PostContext } from "./PostContext";


export const PostProvider = ({ children }) => {
  
  //corregir error de server-rerender HTML al usar typeof window !== 'undefined - usando useState y useEffect para verificar que es un componente a renderizar en el lado del cliente.
  const [isClient, setIsClient] = useState(false); 

  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('guitarLS')) ?? [] : [];
  const [carrito, setCarrito] = useState(carritoLS);


  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('guitarLS', JSON.stringify(carrito));
  }, [carrito])

  const addProduct = (newProduct) => {
    // Actualizar carrito
    if (carrito.some(productoState => productoState.id === newProduct.id)) {
      const carritoActualizado = carrito.map(productoState => {
        if (productoState.id === newProduct.id) {
          productoState.cantidad = newProduct.cantidad
        }
        return productoState
      })
      return setCarrito(carritoActualizado)
    }
    // Agregar nuevo producto al carrito
    setCarrito([...carrito, newProduct])
  }

  const updateCantidad = guitarra => {
    // funcionalidad modifica cantidad articulos en carrito
    const actualizarCarrito = carrito.map(guitarraState => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = guitarra.cantidad;
      }
      return guitarraState
    })
    setCarrito(actualizarCarrito);
  }

  const deleteProduct = (guitarraId) => {
    // funcionalidad eliminar producto del carrito
    const actualizarCarrito = carrito.filter(guitarraState => guitarraState.id !== guitarraId);
    setCarrito(actualizarCarrito);
  }

  return isClient ? (
    <PostContext.Provider value={({ carrito, addProduct, updateCantidad, deleteProduct })}>
      {children}
    </PostContext.Provider>
  ) : null;
}
