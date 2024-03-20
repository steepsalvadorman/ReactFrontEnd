import { Link } from "react-router-dom"
import logo from "./../assets/images/ideas-digitales-color.png"
function MainHeader() {
    return (
        <header id="main-header">
            <div className="container">
                {/* 
                <h1>Ideas Digitales</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusamus sunt mollitia!</p>
                */}
                <Link id="logo" to="/">
                    <img src={logo} alt="" className="img-fluid"/>
                </Link>
            </div>
        </header>
    )
}

export default MainHeader