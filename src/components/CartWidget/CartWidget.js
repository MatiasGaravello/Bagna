import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './CartWidget.css'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    const carritoVacio = quantity === 0

    const onClick = carritoVacio ? (event) => event.preventDefault() : null

    return (
        <Link to='/cart' className={`CartWidget d-flex align-items-center btn border-0 ${carritoVacio ? 'isDisabled' : ''}`} onClick={onClick}>
            <img src='../images/bag-shopping-solid.svg' alt='CartWidget' />
            {carritoVacio ? '' : quantity}
        </Link>
    )
}

export default CartWidget