// import { getProductById } from "../../asyncMock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { productId } = useParams()

    useEffect(() => {
        getDoc(doc(db, 'products', productId)).then(response => {
            const data = response.data()
            const productAdapted = { idProducto: response.id, ...data }
            setProduct(productAdapted)
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