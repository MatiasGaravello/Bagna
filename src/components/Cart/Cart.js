import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const Cart = () => {

    const { cart, removeItem, clearCart } = useContext(CartContext)

    console.log(cart)

    const getTotal = () => {
        let acc = 0

        cart.forEach(detalleCompra => {
            acc += detalleCompra.precio * detalleCompra.quantity
        });

        return acc
    }

    if (cart.length == 0)
        return (
            <div className='my-5'>
                <h4 className=''>Carrito vacío</h4>
                <h5>Visite nuestra tienda</h5>
                <Link to='/' className='btn btn-secondary'>Productos</Link>
            </div>)

    return (
        <div className='p-4 vstack gap-4 mx-auto w-100' style={{ maxWidth: 950 }}>
            <div className='d-flex justify-content-end'>
                <button className='btn btn-primary' onClick={() => clearCart()}>Limpiar Carrito</button>
            </div>
            {cart.map(cartDetail =>
                <div key={cartDetail.idProducto} className="border-top border-bottom border-2 p-2">
                    <div className="row g-0">
                        <div className="col-auto">
                            <img src={cartDetail.pathImage1} className="img-fluid rounded-start" alt="producto seleccionado" style={{ maxWidth: 150 }} />
                        </div>
                        <div className="col">
                            <div className="card-body d-flex justify-content-around align-items-center h-100">
                                <h5 className="card-title">{cartDetail.nombre}</h5>
                                <div className='d-flex flex-column'>
                                    <p className="card-text m-0">Precio:</p>
                                    <p className='fw-bold'>${cartDetail.precio}</p>
                                </div>
                                <div className='d-flex flex-column'>
                                    <p className="card-text m-0">Cantidad:</p>
                                    <p>{cartDetail.quantity}</p>
                                </div>
                                <div className='d-flex flex-column'>
                                    <p className="card-text m-0">Total:</p>
                                    <p>${cartDetail.precio * cartDetail.quantity}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-end'>
                        <div className='col-auto'>
                            <button className='btn btn-primary' onClick={() => { removeItem(cartDetail.idProducto) }}>Eliminar</button>
                        </div>
                    </div>
                </div>
            )}
            <h3>Total ${getTotal()}</h3>


        </div>
    )
}

export default Cart