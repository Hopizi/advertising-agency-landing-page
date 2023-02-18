import profile from "./images/katie-zaferes.png"
import star from "./icons/star.png"

function Card(props) {
    let badgeText 
    if (props.data.openSpots === 0) {
        badgeText = "SOLD OUT"
    }else if (props.data.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText} </div>}
            <img src={require('./images/'+`${props.data.coverImg}`)} className="card--image"/>
            <div className="card-stats">
                <img src={star}/>
                <span>{props.data.stats.rating}</span>
                <span className="grey">({props.data.stats.reviewCount})</span>
                <span className="grey">{props.data.location}</span>
            </div>
            <p className="card--title">{props.data.title}</p>
            <p><span className="bold">From ${props.data.price}</span> / Person</p>
        </div>
        
    )
} 

export default Card