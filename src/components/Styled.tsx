import styled from "styled-components";

type SortButtonProps = {
  $isSelected: boolean;
};

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  top: 0;
  width: 100%;
  background-color: #edf7ff;
`;

export const CardBox = styled.div`
  max-width: 106rem;
  margin: 0 auto 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 0 3.2rem;

  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Gnd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 9.4rem;
  max-width: 192rem;
  padding: 0 20rem;

  @media (max-width: 1124px) {
    padding: 20px 32px;
    width: 800px;
  }

  @media (max-width: 768px) {
    padding: 13px 32px;
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;

  & img {
    width: 50px;
  }

  & div {
    margin-left: 6px;
    color: var(--gray100, #373740);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const ProfileBoxImg = styled.img`
  width: 50px;
`;

export const UserProfileimg = styled.img`
  width: 50px;
`;

export const ProfileText = styled.div`
  margin-left: 6px;
  color: var(--gray100, #373740);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Cta = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.4rem;
  cursor: pointer;
  background-image: linear-gradient(135deg, var(--primary) 0%, #6ae3fe 100%);
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.8rem;
  font-weight: 600;
`;
export const CtaShort = styled.a`
  width: 12.8rem;
`;
export const SectionContainer = styled.div`
  display: flex;
  width: 1440px;
  padding: 60px 320px 90px;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  gap: 8px;
  background: #f0f6ff;

  & .sectionContent {
    display: flex;
    justify-content: space-between;
    padding: 16px 20px;
    border-radius: 15px;
    border: 1px solid var(--linkbrary-primary-color, #6d6afe);
    background: var(--linkbrary-white, #fff);
    align-items: center;

    & img {
      width: 50px;
    }

    /* & .userName {
      color: #000;
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }

    & .favorite {
      margin-top: 20px;
      color: #000;
      text-align: center;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Pretendard;
      font-size: 40px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    } */
  }
`;

export const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  width: 760px;
  border-radius: 15px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: var(--linkbrary-white, #fff);
  align-items: center;
`;

export const SectionInput = styled.input`
  color: var(--linkbrary-gray-60, #9fa6b2);
  font-family: Pretendard;
  font-size: 16px;
  border: none;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const LinkInputBox = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkImg = styled.img`
  height: 100%;
  margin-right: 12px;
`;

export const LinkAddButton = styled.button`
  display: flex;
  width: 100px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
`;

export const LinkAddText = styled.span`
  color: var(--grey-light, #f5f5f5);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 16rem;
  padding-top: 3.2rem;
  background-color: black;

  & .footerBox {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 192rem;
    height: fit-content;
    padding: 0 10.4rem;

    & .footerLinks {
      display: flex;
      column-gap: 3rem;
      padding-right: 1.8rem;

      & a {
        color: #cfcfcf;
        font-family: Arial;
        font-size: 1.6rem;
      }
    }
  }
`;

export const FooterLink = styled.a`
  color: #cfcfcf;
  font-family: Arial;
  font-size: 1.6rem;
`;
export const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 192rem;
  height: fit-content;
  padding: 0 10.4rem;
`;

export const Copyright = styled.span`
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;
`;
export const FooterLinks = styled.div`
  display: flex;
  column-gap: 3rem;
  padding-right: 1.8rem;
`;

export const Sns = styled.div`
  display: flex;
  column-gap: 1.2rem;
  height: 2rem;
`;

export const Article = styled.article`
  margin-bottom: 40px;
`;

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1060px;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  gap: 40px;
`;

export const SearchBar = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1028px;
  max-width: 106rem;
  padding: 15px 16px;
  justify-content: flex-start;
  border-radius: 10px;
  background: #f5f5f5;
  border: 1px solid #f5f5f5;

  @media (max-width: 1124px) {
    margin-left: 32px;
    margin-right: 32px;
  }
`;

export const SearchResultWrapper = styled.div`
  display: flex;
  width: 381px;
  height: 38px;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;

  & h1 {
    color: var(--Linkbrary-gray100, #373740);
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.2px;
    display: inline;
  }

  & h2 {
    color: var(--Linkbrary-gray60, #9fa6b2);
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.2px;
    display: inline;
  }
`;

export const SearchInput = styled.input`
  margin-left: 10px;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  border: none;
`;

export const SortContainer = styled.div`
  max-width: 106rem;
  margin: 2.4rem auto;
  display: flex;
  justify-content: space-between;
`;

export const SortBox = styled.div`
  display: flex;
  gap: 0.8rem;
  max-width: 106rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  flex-wrap: wrap;
`;

export const SortButton = styled.button<SortButtonProps>`
  font-size: 1.6rem;
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: ${(props) => (props.$isSelected ? "#6D6AFE" : "#fff")};
  color: ${(props) => (props.$isSelected ? "#fff" : "black")};
  cursor: pointer;
`;

export const SortInput = styled.input`
  color: #6d6afe;
  margin-right: 4px;
  border: none;
  text-align: center;
  font-family: Abel;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const SortPlusImg = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const CardTitle = styled.div`
  max-width: 106rem;
  margin: 0 auto 10rem;
  width: 100%;
  padding: 0 3.2rem;
  display: flex;
  justify-content: space-between;
  margin: 2.4rem auto;
`;

export const CardTitleText = styled.h2`
  font-size: 24px;
`;

export const SortEdit = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const SortEditContent = styled.button`
  font-size: 1.4rem;
  color: #9fa6b2;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 34rem;
  height: 33.4rem;
  border-radius: 1rem;
  border: 2px solid rgba(0, 0, 0, 0);
  overflow: hidden;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  margin: 0 auto;
  position: relative;

  &:hover {
    border: 2px solid var(--primary);
  }

  &:hover a .cardImgWrap {
    transition: all 1s;
    transform: scale(1.3);
  }

  &:not(hover) a .cardImgWrap {
    transition: all 1s;
  }

  & .cardImgWrap {
    width: 100%;
    height: 60%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .nullImg {
    position: absolute;
    width: 13rem;
    opacity: 0.5;
  }
`;

export const NoData = styled.div`
  display: flex;
  max-width: 1060px;
  min-height: 20rem;
  padding: 41px 0px 35px 0px;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  margin: 0 auto;
`;

export const CardImgWrap = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 1s;
    transform: scale(1.3);
  }

  &:not(hover) {
    transition: all 1s;
  }
`;

export const NullImg = styled.img`
  position: absolute;
  width: 13rem;
  opacity: 0.5;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 2rem 1rem;
  gap: 1rem;
  position: relative;
  z-index: 2;
  background-color: #fff;

  & .ago {
    font-size: 1.3rem;
  }

  & .des {
    font-size: 1.6rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }

  & .cardDate {
    font-size: 1.4rem;
  }
`;

export const Ago = styled.p`
  font-size: 1.3rem;
`;

export const Star = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

export const KebabAgoBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Kebab = styled.button`
  cursor: pointer;
  background-color: #fff;
`;

export const KebabSelect = styled.div`
  width: 10rem;
  height: 6.4rem;
  position: absolute;
  right: 0;
  top: 3rem;
  background: var(--gray-light-gray-00, #fff);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

export const kebabOption = styled.div`
  width: 100%;
  height: 50%;
  border: 1px solid #fff;
  color: var(--gray-light-gray-100, #333236);
  font-size: 1.4rem;
  line-height: 3.2rem;
  text-align: center;
  cursor: pointer;
  &:last-child {
    background: #e7effb;
    color: #6d6afe;
  }
`;

export const Des = styled.p`
  font-size: 1.6rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const CardDate = styled.p`
  font-size: 1.4rem;
`;
