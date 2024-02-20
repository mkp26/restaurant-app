import Logo from '../assets/hamburgerlogo.png'
import {Link} from "react-router-dom"
function Navbar(){
    return(
    <nav>
        <div className="leftSide">
            <img src={Logo}/>
        </div>
        <h1>Burger26.com</h1>
        <div className="rightSide">
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </nav>
    )
}

export default Navbar