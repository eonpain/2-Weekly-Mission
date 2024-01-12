import Link from "next/link";
import styles from "../../styles/Shared.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles["footer-box"]}>
        <span className={styles["copyright"]}>©codeit - 2023</span>
        <div className={styles["footer-links"]}>
          <Link href="/privacy-policy">
            <span className={styles["footer-link"]}>Privacy Policy</span>
          </Link>
          <Link href="/faq">
            <span className={styles["footer-link"]}>FAQ</span>
          </Link>
        </div>

        <div className={styles["sns"]}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/Icon/facebook.svg"
              alt="facebook 홈페이지로 연결된 facebook 로고"
              style={{ width: "100%", height: "auto" }}
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/Icon/twitter.svg"
              alt="twitter 홈페이지로 연결된 twitter 로고"
              style={{ width: "100%", height: "auto" }}
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/Icon/youtube.svg"
              alt="youtube 홈페이지로 연결된 youtube 로고"
              style={{ width: "100%", height: "auto" }}
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/Icon/instagram.svg"
              alt="instagram 홈페이지로 연결된 instagram 로고"
              style={{ width: "100%", height: "auto" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
