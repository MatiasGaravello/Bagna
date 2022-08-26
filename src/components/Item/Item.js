import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ product }) => {
    return (
        <div className="Item col">
            <div className="card h-100">
                <img src={product.pathImage1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.nombre}</h5>
                    <p className="card-text fs-4 fw-semibold">${product.precio}</p>
                </div>
                <div className="card-footer bg-transparent">
                    <Link to={`/detail/${product.idProducto}`} className="btn btn-primary py-2 px-3">Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default Item