import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProductByCategory, getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState()

    const { categoryId } = useParams()

    useEffect(() => {
        const asynFunction = categoryId ? getProductByCategory : getProducts

        setLoading(true)

        asynFunction(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [categoryId])

    if (loading) {
        return (
            <button class="btn btn-dark mt-5" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
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