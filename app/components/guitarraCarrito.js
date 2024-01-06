'use client'

import { useState, useContext } from "react"
import Image from "next/image";
import { PostContext } from "../context/PostContext"; 
import styles from '../styles/guitarras.module.css'


export default function GuitarraCarrito({ guitarra }) {

    const [cantidad, setCantidad] = useState(0)
    const {carrito, addProduct} = useContext(PostContext);
      
    const { nombre, image, description, precio, publishedAt } = guitarra[0].attributes;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cantidad < 1) {
            alert('Seleccione una cantidad valida');
            return
        }

        const productoSeleccionado = {
            id: guitarra[0].id, 
            nombre,
            image: image?.data.attributes.url,
            description,
            precio,
            cantidad
        }

        addProduct(productoSeleccionado);
        // ------------------- console.log(productoSeleccionado) ------------------------;
    }

    return (
        <div className={styles.guitarra}>
            <Image
                src={image?.data.attributes.url}
                width={300}
                height={400}
                alt={`Imagen de guitarra ${nombre}`}
            />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{description}</p>
                <strong className={styles.precio}>${precio}</strong>

                <form
                    onSubmit={handleSubmit}
                    className={styles.formulario}
                >
                    <label htmlFor="cantidad">Cantidad</label>
                    <select
                        onChange={e => setCantidad(+e.target.value)}
                        id="cantidad"
                    >
                        <option value="0">--Seleccione--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="submit" value="Enviar al carrito" className={styles.enlace} />
                </form>
            </div>
        </div>

    )
}
