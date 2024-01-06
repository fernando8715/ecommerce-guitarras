'use client'
import { useContext, useEffect, useState } from "react"
import { PostContext } from "../context/PostContext"

const PedidoCarrito = () => {

    const { carrito } = useContext(PostContext);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const valorTotal = carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0)
        setTotal(valorTotal);
    }, [carrito])

    return (
        <>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: <span>${`${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 4 }).format(total)}`}</span></p>
        </>
    )
}

export default PedidoCarrito