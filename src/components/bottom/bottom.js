import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Item from "./item"
import img3 from '.././3.png'
import img2 from '.././2.png'
import img4 from '.././4.png'
import './bottom.css'

export default function Bottom() {
    return (
        <div className="bottom">
            <div className="bottom_arrow_right">
            <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <Item name="Nike Air Force" price="210" img={img3}  />
            <Item name="Nike Air Jordan" price="320" img={img4}  />
            <Item name="Nike Air Ken" price="1290" img={img2} img2  />
            <Item name="Nike Air KT" price="510" img={img4}  />
        </div>
    )
}