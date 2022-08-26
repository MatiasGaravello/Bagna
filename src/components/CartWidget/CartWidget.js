import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './CartWidget.css'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <Link to='/cart' className={`CartWidget d-flex align-items-center btn border-0 ${quantity === 0 ? 'isDisabled' : ''}`}>
            <img src='../images/bag-shopping-solid.svg' alt='CartWidget' />
            {quantity}
        </Link>
    )
}

export default CartWidget