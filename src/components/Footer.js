import bbLabs from './pngs/bb_labs.png';
import Contact from './Contact';
export default function Footer(){
    return(
        <>
        <footer>
            <div class="row">
                <div class="col">
                <img src={bbLabs} class="bb-logo"/>
                <p class="f-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro, magnam blanditiis, magni recusandae optio reiciendis temporibus sunt consequuntur ullam iure eveniet amet error nisi voluptate. Mollitia ipsam blanditiis excepturi.</p>
                </div>
                <div class="col">
                <h3>Office</h3>
                <p class="f-p">Villa No.407,</p>
                <p class="f-p">Devanahalli,</p>
                <p class="f-p">Bengalore,</p>
                <p class="f-p">Karnataka.</p>
                <p class="email-id">bb-labs@gmail.com</p>
                <h4>+91 0123456789</h4>
                </div>
                <div class="col">
                <h3>Links</h3>
                <ul class="f-ul">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Learn</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Please Give Feedback</a></li>
                </ul> 
                </div>
                <div class="col">
                <h3>News Letter</h3>
                <form>
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" placeholder="Enter your email id" required/>
                    <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                </form>
                <div class="social-icons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                </div>
                </div>
            </div>
        </footer>
        </>
    )
}