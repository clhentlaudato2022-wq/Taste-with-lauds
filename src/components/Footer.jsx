import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">
          <h3>Taste with Lauds</h3>
          <p>
           Delicious recipes, inspiring food stories, and wonderful ideas from Lauds' kitchen. Discover the rich flavors of Filipino cuisine, explore traditional dishes, try new recipes, and find inspiration to create delicious meals that bring family and friends together.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

       <div className="footer-column">
  <h4>Follow Us</h4>

  <a
    href="https://www.facebook.com/trankeda"
    target="_blank"
    rel="noopener noreferrer"
  >
    Facebook
  </a>

  <a
    href="https://www.instagram.com/kaping_mainit?stkn=OW56dGxnNHJpeWhy"
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram
  </a>

  <a
    href="https://www.tiktok.com/@clhentlaudato?_r=1&_t=ZS-99XKEGqeIss"
    target="_blank"
    rel="noopener noreferrer"
  >
    TikTok
  </a>
</div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Taste with Lauds</p>
        <p>Made with love & good food ❤️</p>
      </div>

    </footer>
  );
}

export default Footer;