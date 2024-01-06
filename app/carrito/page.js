import ListaCarrito from '../components/listaCarrito'
import PedidoCarrito from '../components/pedidoCarrito'
import styles from '../styles/carrito.module.css'


export const metadata = {
    title: 'GuitarLa - Carrito',
}

export default function Carrito() {

    return (
        <main className="contenedor">
            <h1 className="heading">Carrito</h1>

            <div className={styles.contenido}>
                <div className={styles.carrito}>
                    <h2>Articulos</h2>
                    <ListaCarrito />
                </div>

                <aside className={styles.resumen}>
                    <PedidoCarrito />
                </aside>
            </div>
        </main>
    )
}
