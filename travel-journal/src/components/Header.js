import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEarthAmericas} from '@fortawesome/free-solid-svg-icons'

function Header() {
    return(
        <div className='header'>
            <h1 className='header-text'><i className='header-icon'><FontAwesomeIcon icon={faEarthAmericas} className="world"/></i> my travel journal.</h1>
        </div>
    )
}

export default Header