import './ItemDetail.css'

const ItemDetail = (product) => {
    return (
        <div className="ItemDetail card mb-3" style={{ maxWidth: 800 }}>
            <div className="row g-0">
                <div className="col-md-6">
                    <img src={product.pathImage1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-6" style={{ backgroundColor: '#D0D5D9' }}>
                    <div className="card-body mt-2 d-flex flex-column gap-1">
                        <h5 className="card-title">{product.nombre}</h5>
                        <p className="card-text fs-3 fw-bold">${product.precio}</p>
                        <p className="card-text">{product.descripcion}</p>
                        <div id="seccionTalle" className="form-floating">
                            <select className="form-select" id="selectTalle" aria-label="Floating label select example">
                                <option value="">Seleccione un talle</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                            </select>
                            <label className='text-start'>Talle</label>
                        </div>
                        <div className="form-floating my-4">
                            <select className="form-select" id="selectCantidad"
                                aria-label="Floating label select example">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                            <label className='text-start'>Cantidad</label>
                        </div>

                        <button id="btnComprar" className="btn btn-primary text-uppercase py-3" type="button">Comprar ahora</button>
                        <button id="btnAgregarAlCarrito" className="btn btn-secondary text-uppercase py-3" type="button">Agregar al
                            carrito</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail