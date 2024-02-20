import React from "react";
import {Link} from "react-router-dom"
import BannerImage from "../assets/banner.jpg"
function Home(){
    return(
        <div className="home" style={{backgroundImage:`url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1>Burger 26</h1>
                <p>So delicious burgers <br/> with 33 spicy mixed</p>
                <Link to="/menu"><button>Order Now</button></Link>
            </div>
        </div>
    )
}

export default Home