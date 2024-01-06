'use client'

import { useState, createContext } from "react";
export const PostContext = createContext()


export const PostProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([]);

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

  return (
    <PostContext.Provider value={({ carrito, addProduct, updateCantidad, deleteProduct })}>
      <div>
        {children}
      </div>
    </PostContext.Provider>
  )
}

