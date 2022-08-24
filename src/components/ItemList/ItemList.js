import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-5 container" style={{ maxWidth: 1366 }}>
            {products.map(prod => <Item key={prod.idProducto} product={prod} />)}
        </div>
    )
}

export default ItemList
