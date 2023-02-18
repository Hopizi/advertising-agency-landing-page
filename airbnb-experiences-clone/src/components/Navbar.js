import AirBnbLogo from './icons/airbnb-logo.png'

function Navbar() {
    return (
        <nav>
            <img className='nav--logo' src={AirBnbLogo}/>
        </nav>
    )
}

export default Navbar