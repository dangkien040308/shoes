import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faStar ,faCheck} from "@fortawesome/free-solid-svg-icons"
//import { reStart as faStar } from "@fortawesome/free-regular-svg-icons"
import './item.css'

export default function Item({img , name , price ,img2}) {
    return (
        <div className="item">
            <div className={img2 ? "item_img2" : "item_img"}> 
             <img src={img} alt="img" className={img2 ? 'img2' : 'img'} />
            </div>
            <div className="item_des">
               <div className="item_container">
                <div className="item_name">{name}</div>
                 <div className="item_start">
                   <FontAwesomeIcon icon={faStar} />
                   <FontAwesomeIcon icon={faStar} />
                   <FontAwesomeIcon icon={faStar} />
                   <FontAwesomeIcon icon={faStar} />
                  
                 </div>    
                <div className="item_price">
                       {price}$
                </div>
               </div>
               <div className="item_icon">
                <FontAwesomeIcon icon={faCheck} />
               </div>

            </div>
        </div>
    )
}