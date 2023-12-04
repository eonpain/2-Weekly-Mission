import instagramIcon from "../Image/instagram.svg";
import youtubeIcon from "../Image/youtube.svg";
import twitterIcon from "../Image/twitter.svg";
import facebookIcon from "../Image/facebook.svg";
import * as S from "./Styled";

function Footer() {
  return (
    <S.Footer>
      <S.Copyright>©codeit - 2023</S.Copyright>
      <S.FooterLinks>
        <S.FooterLink href="/">Privacy Policy</S.FooterLink>
        <S.FooterLink href="/">FAQ</S.FooterLink>
      </S.FooterLinks>

      <S.Sns>
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
          <img src={twitterIcon} alt="twitter 홈페이지로 연결된 twitter 로고" />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtubeIcon} alt="youtube 홈페이지로 연결된 youtube 로고" />
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
      </S.Sns>
    </S.Footer>
  );
}

export default Footer;
