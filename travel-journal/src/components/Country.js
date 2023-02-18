import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

function Country(props) {
    console.log(props)
    return(
        <div className='journal-entry'>
            <div className='image-container'>
                <img className='image' src={props.journal.imageUrl}/>
            </div>
            <div className='journal-info'>
                <h2 className='journal-country'><FontAwesomeIcon icon={faLocationDot} className="locate"/> {props.journal.location}<span className='journal-map'><a href='www.googlemaps.com'>View On Google Maps</a></span></h2>
                <h1 className='journal-location'>{props.journal.title}</h1>
                <p className='journal-date'>{props.journal.startDate} - {props.journal.endDate}</p>
                <p className='journal-text'>{props.journal.description}</p>
            </div>
        </div>
    )
}

export default Country