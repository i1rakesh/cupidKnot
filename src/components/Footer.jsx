import logo from "../assets/LOGO.png";
import startup from "../assets/startupindia.png";
import playsotre from "../assets/playStore.png";
import appStore from "../assets/appStore.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram (1).png";
import tweeter from "../assets/tweeter.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import cafe from "../assets/Group 2017.png"

function Footer() {
  return (
    <footer>
      <div className="aboutUs">
        <img className="footer-logo" src={logo} alt="" />
        <div className="middle">
          <img src={startup} alt="" />
          <div className="download-links">
            <img src={playsotre} alt="" />
            <img src={appStore} alt="" />
          </div>
          </div>
          <div className="socials">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
            <img src={linkedin} alt="" />
            <img src={tweeter} alt="" />
          </div> 
      </div>
      <div className="otherLinks">
      <div class="community">
        <h2>Company</h2>
        <a href="">About us</a>
        <a href="">Terms of use</a>
        <a href="">Privacy Policy</a>
        <a href="">Community Rules</a>
        <a href="">Disclaimer </a>
        <a href="">Methodology</a>
      </div>
      <div class="community">
        <h2>Support </h2>
        <a href="">Requested Form</a>
        <a href="">Contact Support</a>
        <a href="">FAQ’s</a>
        <a href="">Glossary</a>
      </div>
      <div class="community">
        <h2>Socials</h2>
        <a href="">Socials</a>
        <a href="">Instagram</a>
        <a href="">Twitter</a>
        <a href="">Youtube</a>
        <a href="">Telegram </a>
      </div>
      <div class="community">
        <h2>Socials</h2>
        <a href="">Socials</a>
        <a href="">Instagram</a>
        <a href="">Twitter</a>
        <a href="">Youtube</a>
        <a href="">Telegram </a>
      </div>
      <div class="community">
        <h2>Socials</h2>
        <a href="">Socials</a>
        <a href="">Instagram</a>
        <a href="">Twitter</a>
        <a href="">Youtube</a>
        <a href="">Telegram </a>
      </div>
      <div class="extras">
        <a href="">Socials</a>
        <a href="">Instagram</a>
        <a href="">Twitter</a>
        <a href="">Youtube</a>
        <a href="">Telegram </a>
      </div>
      <div class="contactUs">
      <address>
      213,  Ambedkar Shopping Center, <br /> Near Mandarwaja Fire Station, Ring <br /> Road, Surat - 395002
      <p></p>
      <p></p>
      <a href="mailto:support@cupidknot.com"><b> support@cupidknot.com</b></a>.
      </address>
      </div>
      </div>
      <div className="cafeImg">
      <img  src={cafe} alt="" />
      </div>
      <span className="copyright">© 2021 Copyright By Jeetjatan Matrimonial Services Pvt. Ltd.</span>
    </footer>
  );
}
export default Footer;
