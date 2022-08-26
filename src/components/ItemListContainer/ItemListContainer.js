import { useEffect, useState } from 'react'
import './ItemListContainer.css'
// import { getProductByCategory, getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState()

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = !categoryId ? collection(db, 'products') : query(collection(db, 'products'), where('categoria', '==', categoryId))

        getDocs(collectionRef).then(response => {
            console.log(response)
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()

                return { idProducto: doc.id, ...data }

            })

            setProducts(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })


    }, [categoryId])

    if (loading) {
        return (
            <button className="btn btn-dark mt-5" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        )
    }

    return (
        <>
            <h5 className='text-uppercase my-4'>{greeting}</h5>
            <ItemList products={products} />
        </>

    )
}

export default ItemListContainer