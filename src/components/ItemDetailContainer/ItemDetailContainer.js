import { getProductById } from "../../asyncMock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    useEffect(() => {
        getProductById('104').then(response => {
            setProduct(response)
        })
    }, [])

    return (
        <>
            <h1>Detalle</h1>
            <h2>{product?.nombre}</h2>
        </>


    )
}

export default ItemDetailContainer