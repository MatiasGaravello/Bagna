import { getProductById } from "../../asyncMock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    useEffect(() => {
        getProductById('104').then(response => {
            setProduct(response)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <>
            <h2 className="my-5 text-uppercase">Detalle</h2>
            <ItemDetail {...product} />
        </>


    )
}

export default ItemDetailContainer