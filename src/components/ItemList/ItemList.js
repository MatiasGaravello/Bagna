import Item from "../Item/Item"

const ItemList = ({products})=>{
    return(
        <ul>
             {products.map(prod=><Item key={prod.idProducto} product={prod}/> )}
        </ul>
    )
}

export default ItemList
