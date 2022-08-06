import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className='Navbar mx-auto container-fluid'>
            <div className='row m-0'>
                <div className='col d-flex justify-content-center'>
                    <img src='images/logo-flyer.png' />
                </div>
            </div>
            <div className='row m-0'>
                <div className='col'>
                    <div className='d-inline-flex gap-5'>
                        <button className='border-0 text-uppercase fw-semibold'>Carteras</button>
                        <button className='border-0 text-uppercase fw-semibold'>Bolsos y Maletines</button>
                        <button className='border-0 text-uppercase fw-semibold'>Mochilas</button>
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