import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import './CartWidget.css'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <div className='CartWidget'>
            <img src='../images/bag-shopping-solid.svg' alt='CartWidget' />
            {quantity}
        </div>
    )
}

export default CartWidget