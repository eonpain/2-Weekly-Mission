import "./Folder.css";
import instagramIcon from "./assets/instagram.svg";
import youtubeIcon from "./assets/youtube.svg";
import twitterIcon from "./assets/twitter.svg";
import facebookIcon from "./assets/facebook.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-box">
          <span className="copyright">©codeit - 2023</span>
          <div className="footer-links">
            <a className="footer-link" href="/">
              Privacy Policy
            </a>
            <a className="footer-link" href="/">
              FAQ
            </a>
          </div>

          <div className="sns">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookIcon}
                alt="facebook 홈페이지로 연결된 facebook 로고"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitterIcon}
                alt="twitter 홈페이지로 연결된 twitter 로고"
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={youtubeIcon}
                alt="youtube 홈페이지로 연결된 youtube 로고"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="instagram 홈페이지로 연결된 instagram 로고"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
