import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='Navbar mx-auto'>
            <div className='d-flex justify-content-center'>
                <img src='images/logo-flyer.png' />
            </div>
            <div className='d-flex justify-content-around'>
                <button className='border-0 text-uppercase fw-semibold'>Carteras</button>
                <button className='border-0 text-uppercase fw-semibold'>Bolsos y Maletines</button>
                <button className='border-0 text-uppercase fw-semibold'>Mochilas</button>
                <button className='border-0 text-uppercase fw-semibold'>Riñoneras</button>
                <button className='border-0 text-uppercase fw-semibold'>Portanotebooks</button>
                <button className='border-0 text-uppercase fw-semibold'>Bandoleras</button>
                <button className='border-0 text-uppercase fw-semibold'>Billeteras</button>
            </div>
        </nav>
    )
}

export default Navbar