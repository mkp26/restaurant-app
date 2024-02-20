import BannerImage from "../assets/1beef.jpg"
function About(){
    return(
        <div className="about">
            <div className="aboutTop" style={{backgroundImage:`url(${BannerImage})`}}></div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sit, iusto atque veritatis saepe sequi blanditiis non recusandae eos soluta dignissimos molestias! Porro, praesentium. Rem ad nisi quos dolores blanditiis temporibus in voluptatibus cupiditate nemo fugiat ipsam magnam, similique, repudiandae deserunt sit? Reiciendis porro sapiente non a saepe quaerat quas!</p>
            </div>
        </div>
    )
}
export default About