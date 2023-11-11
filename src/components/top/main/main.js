import './main.css'
import img2 from '../../2.png'

export default function Main() {
    return (
        <div className="main">
            <div className="main_content">
                <div className="main_content-1">
                    Sale Product
                </div>
                <div className="main_content-2" >
                    Make your move up to 50% off
                </div>
                <div className="main_content-3" >
                    First lifestyle Air Max returns with a vibrant color which sure to turn heads
                </div>
                <button className="main_content-btn">
                    Shop Now
                </button>
            </div>
            <div className="main_content-img">
                <img src={img2} alt='loading' />
            </div>
        </div>
    )
}