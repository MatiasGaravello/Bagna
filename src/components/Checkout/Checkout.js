import { addDoc, collection, updateDoc, doc, getDoc, query, where, getDocs, documentId, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { useNavigate } from "react-router"


const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false)

    const [orderCreated, setOrderCreated] = useState(false)

    const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const totalQuantity = getQuantity()

    const total = getTotal()

    const createOrder = async () => {
        setIsLoading(true)

        try {
            const objOrder = {
                buyer: {
                    firstName: 'Carlos',
                    lastName: 'Garavello',
                    phone: '2611234566',
                    address: 'Liniers 145'
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            }

            const ids = cart.map(prod => prod.idProducto)
            console.log(ids)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            const outOfStock = []

            const batch = writeBatch(db)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.idProducto === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                console.log(`El id de su orden es: ${orderAdded.id}`)

                clearCart()

                setOrderCreated(true)

                setTimeout(() => {
                    navigate('/')
                }, 3000)

            } else {
                console.log('Hay productos que estan fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }


    }

    if (isLoading) {
        return <h1>Se esta generando tu orden...</h1>
    }

    if (orderCreated) {
        return <h1>La orden fue creada correctamente, sera redirigido al listado de productos</h1>
    }

    return (
        <>
            <h3>Checkout</h3>
            <button onClick={createOrder}>Generar Orden</button>
        </>
    )
}

export default Checkout