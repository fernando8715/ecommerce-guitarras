'use client'

import { useContext } from "react"
import { PostContext } from "../context/PostContext"
import Image from "next/image";
import styles from '../styles/carrito.module.css'

const ListaCarrito = () => {

    const { carrito, updateCantidad, deleteProduct } = useContext(PostContext);

    return (
        <>
            {carrito.map(p => (
                <div key={p.id} className={styles.producto}>
                    <div>
                        <Image
                            src={p.image}
                            width={250}
                            height={480}
                            alt={p.nombre}
                        />
                    </div>
                    <div>
                        <p className={styles.nombre}>{p.nombre}</p>
                        <p className={styles.precio}>Precio unidad: <span>${p.precio}</span></p>
                        <div className={styles.cantidad}>
                            <p>Cantidad:</p>

                            <select
                                className={styles.select}
                                value={p.cantidad}
                                onChange={e => updateCantidad({
                                    id: p.id,
                                    cantidad: e.target.value
                                })}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <p className={styles.subtotal}>Subtotal: <span>${p.precio * p.cantidad}</span></p>
                    </div>
                    <button
                        className={styles.eliminar}
                        type="button"
                        onClick={()=> deleteProduct(p.id)}
                    >
                        X
                    </button>
                </div>
            ))}
        </>
    )
}

export default ListaCarrito