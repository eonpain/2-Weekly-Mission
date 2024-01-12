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
            src={'/assets/Icon/facebook.svg'}
            alt="facebook 홈페이지로 연결된 facebook 로고"
          />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={'/assets/Icon/twitter.svg'} alt="twitter 홈페이지로 연결된 twitter 로고" />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={'/assets/Icon/youtube.svg'} alt="youtube 홈페이지로 연결된 youtube 로고" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={'/assets/Icon/instagram.svg'}
            alt="instagram 홈페이지로 연결된 instagram 로고"
          />
        </a>
      </S.Sns>
    </S.Footer>
  );
}

export default Footer;
