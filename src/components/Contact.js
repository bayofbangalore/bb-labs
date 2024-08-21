import rightImg from "./pngs/right_img.png";
import arrowImg from "./pngs/arrow_icon.png";
export default function Contact(){
    return(
        <>
        <div className="contact-body">
        <div className="contact-container">
            <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
                <div className="contact-left-title">
                    <h2>Get in touch</h2>
                    <hr/>
                </div>
                <input type="hidden" name="access_key" value="ca83624b-b8ee-4d32-982f-7be4f3a656c1"/>
                <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required/>
                <input type="email" name="email" placeholder="Your Email" className="contact-inputs" required/>
                <textarea name="Message" placeholder="Please give your feedback here" className="contact-inputs" required></textarea>
                <button type="submit">Submit <img src={arrowImg} alt="rightAroow"/></button>
            </form>

            <div className="contact-right">
                <img src={rightImg} alt="button-arrow"/>
            </div>
        </div>
        </div>
        </>
    )
}