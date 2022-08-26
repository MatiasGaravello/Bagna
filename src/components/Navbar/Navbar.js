import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className='Navbar mx-auto container-fluid'>
            <div className='row m-0'>
                <Link to='/' className='col d-flex justify-content-center'>
                    <img src='../images/logo-flyer.png' />
                </Link>
            </div>
            <div className='row m-0'>
                <div className='col'>
                    <div className='d-inline-flex gap-5'>
                        <Link to='/category/carteras' className='btn border-0 text-uppercase fw-semibold'>Carteras</Link>
                        <Link to='/category/bolsosYmaletines' className='btn border-0 text-uppercase fw-semibold'>Bolsos y Maletines</Link>
                        <Link to='/category/mochilas' className='btn border-0 text-uppercase fw-semibold'>Mochilas</Link>
                    </div>
                </div>
                <div className='col-auto'>
                    <CartWidget />
                </div>


            </div>

        </nav>
    )
}

export default Navbar