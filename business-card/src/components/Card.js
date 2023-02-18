import Pic from "./images/woman-pic.jpg"
import Facebook from "./icons/Facebook Icon.png"
import Twitter from "./icons/Twitter Icon.png"
import Instagram from "./icons/Instagram Icon.png"
import Github from "./icons/GitHub Icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'



function Card() {
    return (
        <div className="card-background">
            <div className="card">
                <div className="img">
                    <img src={Pic}></img>
                </div>
                <div className="About">
                    <h1>Laura Smith</h1>
                    <h3>Frontend Developer</h3>
                    <h4>laurasmith.website</h4>
                    <div className="btn">
                        <button className="email"><span className="link-logo"><FontAwesomeIcon icon={faEnvelope} /></span>Email</button>
                        <button className="linkedln"><span className="link-logo"><FontAwesomeIcon icon={faLinkedin} /></span>Linkedln</button>
                    </div>
                </div>
                <div className="sec-abt">
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

                    <h2>Interest</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
                <div className="socials">
                    <ul className="icons">
                        <li><img src={Facebook}/></li>
                        <li><img src={Github}/></li>
                        <li><img src={Twitter}/></li>
                        <li><img src={Instagram}/></li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Card