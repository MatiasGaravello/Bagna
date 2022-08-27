import { useState, createContext } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {


    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.idProducto)) {
            setCart([...cart, productToAdd])
        }else{
            console.log("No se aceptan elementos duplicados")
        } 
        // else {
        //     const cartUpdated = cart.map(prod => {
        //         if (prod.idProducto === productToAdd.idProducto) {
        //             const productUpdated = {
        //                 ...prod,
        //                 quantity: productToAdd.quantity
        //             }
        //             return productUpdated
        //         } else {
        //             return prod
        //         }
        //     })

        //     setCart(cartUpdated)
        // }
    }

    const removeItem = (id) => {
        const newCartWhithoutProduct = cart.filter(prod => prod.idProducto !== id)
        setCart(newCartWhithoutProduct)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.idProducto === id)
    }

    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const getTotal = () => {
        let acc = 0

        cart.forEach(detalleCompra => {
            acc += detalleCompra.precio * detalleCompra.quantity
        });

        return acc
    }

    return (
        <CartContext.Provider value={{ cart, addItem, getQuantity, isInCart, removeItem, clearCart, getTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext