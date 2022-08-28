import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


const ItemDetail = ({ idProducto, pathImage1, nombre, precio, descripcion, stock }) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        console.log(`la cantidad agregada es: ${quantity}`)

        setQuantity(quantity)

        const productToAdd = { idProducto, nombre, precio, quantity, pathImage1 }

        addItem(productToAdd)
    }



    return (
        <div className="ItemDetail card mb-3" style={{ maxWidth: 800 }}>
            <div className="row g-0">
                <div className="col-md-6">
                    <img src={pathImage1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-6" style={{ backgroundColor: '#D0D5D9' }}>
                    <div className="card-body mt-2 d-flex flex-column gap-1 h-100 justify-content-between">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text fs-3 fw-bold">${precio}</p>
                        <p className="card-text">{descripcion}</p>
                        <div id="seccionTalle" className="form-floating">
                            <select className="form-select" id="selectTalle" aria-label="Floating label select example">
                                <option value="">Seleccione un talle</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                            </select>
                            <label className='text-start'>Talle</label>
                        </div>
                        {
                            quantity === 0 ? <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} /> : <Link to='/cart' className="btn btn-primary text-uppercase py-3">Finalizar compra</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail