import './Item.css'

const Item = ({ product }) => {
    return (
        <li className='py-3'>
            <div className="CardProduct card">
                <img src={product.listPathImagen[0]} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.nombre}</h5>
                    <p className="card-text fs-3 fw-bold">${product.precio}</p>
                    <button className="btn btn-primary">Ver detalle del producto</button>
                </div>
            </div>
        </li>
    )
}

export default Item