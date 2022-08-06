import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (

        <div className="ItemCount">
            <div className="d-flex justify-content-center gap-3">
                <button onClick={decrement} className='btnContador btn btn-outline-dark fs-4'>-</button>
                <h1>{count}</h1>
                <button onClick={increment} className='btnContador btn btn-outline-dark fs-4'>+</button>
            </div>
            <button onClick={() => { onAdd(count) }} className='btn btn-primary mt-3'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount