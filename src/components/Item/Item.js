import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ product }) => {
    return (
        <li className='py-3' style={{maxWidth:500}}>
            <div className="CardProduct card">
                <img src={product.pathImage1} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.nombre}</h5>
                    <p className="card-text fs-3 fw-bold">${product.precio}</p>
                    <Link to={`/detail/${product.idProducto}`} className="btn btn-primary">Ver detalle del producto</Link>
                </div>
            </div>
        </li>
    )
}

export default Item