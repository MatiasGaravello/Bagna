import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const Cart = () => {

    const { cart, removeItem, clearCart } = useContext(CartContext)

    console.log(cart)

    if (cart.length == 0)
        return <h4 className=''>Carrito vacío</h4>

    return (
        <div className='p-4 vstack gap-4 mx-auto w-100' style={{ maxWidth: 950 }}>
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
            <div>
                <button className='btn btn-primary' onClick={() => clearCart()}>Limpiar Carrito</button>
            </div>

        </div>
    )
}

export default Cart