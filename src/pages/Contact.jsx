import BannerImage from '../assets/2blackbean.jpg'
function Contact(){
    return(
        <div className="contact">
            <div className="leftSide" style={{backgroundImage:`url(${BannerImage})`}}></div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name='name' placeholder='Enter Full Name...' />
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' placeholder='Enter Your Email...' />
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name='message' placeholder='Enter Your Message...' />
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    )
}
export default Contact