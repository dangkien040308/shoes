import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass , faCartShopping} from "@fortawesome/free-solid-svg-icons"
import "./nav.css" 
import img from './brand.jpg';

export default function Nav() {
    return (
        <div className="nav">
           <div className="nav_brand">
             <img src={img} alt="loading..." />
           </div>
           <div className="nav_wrap">
             <span>Men</span>
             <span>Women</span>
             <span>Kids</span>
             <span>Favorites</span>
           </div>
           <div className="nav_input-container">
             <FontAwesomeIcon icon={faMagnifyingGlass} />
             <input type="text" placeholder="Search" />
             <FontAwesomeIcon icon={faCartShopping} />
           </div>
        </div>
    )
}