import Nav from "./nav/nav.js"
import Main from "./main/main.js"
import './top.css'
export default function Top() {
    return (
        <> 
        <div className="top"> 
          <Nav />
          <Main/>
        </div>
        </>
    )
}