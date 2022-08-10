import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProductByCategory, getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asynFunction = categoryId ? getProductByCategory : getProducts

        asynFunction(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        })

    }, [categoryId])

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </>

    )
}

export default ItemListContainer