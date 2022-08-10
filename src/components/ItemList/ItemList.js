import Item from "../Item/Item"

const ItemList = ({products})=>{
    return(
        <ul className="d-flex flex-column">
             {products.map(prod=><Item key={prod.idProducto} product={prod}/> )}
        </ul>
    )
}

export default ItemList
